/**
 * 万能百宝箱 v5.0 - 核心逻辑
 * 搜索、分类筛选、弹窗、键盘快捷键、暗色模式
 */

(function() {
    'use strict';

    // ============================================
    // 状态
    // ============================================
    let currentCategory = 'all';
    let currentSort = 'hot';
    let searchQuery = '';

    // ============================================
    // 初始化
    // ============================================
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        renderCategoryNav();
        renderDashboard();
        renderToolsGrid();
        updateCounts();
        initDarkMode();
        initSearch();
        initKeyboard();
        initMobileMenu();
        initSortButtons();
    }

    // ============================================
    // 暗色模式
    // ============================================
    function initDarkMode() {
        const saved = localStorage.getItem('toolbox_dark');
        if (saved === 'true' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
        document.getElementById('darkToggle').addEventListener('click', toggleDarkMode);
    }

    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('toolbox_dark', document.documentElement.classList.contains('dark'));
    }

    // ============================================
    // 搜索
    // ============================================
    function initSearch() {
        const input = document.getElementById('searchInput');
        const clear = document.getElementById('searchClear');

        input.addEventListener('input', debounce(function() {
            searchQuery = input.value.trim();
            clear.style.display = searchQuery ? 'flex' : 'none';
            performSearch();
        }, 200));

        clear.addEventListener('click', function() {
            input.value = '';
            searchQuery = '';
            clear.style.display = 'none';
            performSearch();
            input.focus();
        });

        document.getElementById('clearSearchBtn').addEventListener('click', function() {
            input.value = '';
            searchQuery = '';
            clear.style.display = 'none';
            performSearch();
        });
    }

    function performSearch() {
        const resultsSection = document.getElementById('searchResults');
        const grid = document.getElementById('searchResultsGrid');
        const title = document.getElementById('searchResultsTitle');

        if (!searchQuery) {
            resultsSection.style.display = 'none';
            document.getElementById('dashboard').style.display = '';
            document.getElementById('categoryNav').style.display = '';
            document.getElementById('allTools').style.display = '';
            return;
        }

        const query = searchQuery.toLowerCase();
        const results = TOOLS.filter(t =>
            t.name.toLowerCase().includes(query) ||
            t.desc.toLowerCase().includes(query) ||
            t.tags.some(tag => tag.toLowerCase().includes(query)) ||
            t.audience.toLowerCase().includes(query) ||
            t.audienceTags.some(a => a.includes(query)) ||
            getCategoryName(t.category).includes(query)
        );

        resultsSection.style.display = '';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('categoryNav').style.display = 'none';
        document.getElementById('allTools').style.display = 'none';

        title.textContent = `搜索"${searchQuery}" — 找到 ${results.length} 个工具`;
        grid.innerHTML = results.length
            ? results.map(t => renderToolCard(t)).join('')
            : '<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-text">没有找到匹配的工具，试试其他关键词？</div></div>';

        // 绑定卡片点击
        grid.querySelectorAll('.tool-card').forEach(card => {
            card.addEventListener('click', () => openModal(card.dataset.id));
        });
    }

    // ============================================
    // 键盘快捷键
    // ============================================
    function initKeyboard() {
        document.addEventListener('keydown', function(e) {
            // / 聚焦搜索
            if (e.key === '/' && !isInputFocused()) {
                e.preventDefault();
                const input = document.getElementById('searchInput');
                if (input) input.focus();
                // 移动端：打开抽屉并聚焦
                if (window.innerWidth <= 768) {
                    openMobileDrawer();
                    setTimeout(() => {
                        const mInput = document.querySelector('.mobile-search input');
                        if (mInput) mInput.focus();
                    }, 300);
                }
            }
            // Esc 关闭弹窗
            if (e.key === 'Escape') {
                closeModal();
                closeMobileDrawer();
            }
            // 数字键 1-7 切换分类
            if (e.key >= '1' && e.key <= '7' && !isInputFocused()) {
                e.preventDefault();
                const idx = parseInt(e.key);
                const cats = CATEGORIES;
                if (cats[idx - 1]) {
                    setCategory(cats[idx - 1].id);
                }
            }
        });
    }

    function isInputFocused() {
        const tag = document.activeElement.tagName;
        return tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable;
    }

    // ============================================
    // 分类导航
    // ============================================
    function renderCategoryNav() {
        const scroll = document.querySelector('.category-scroll');
        CATEGORIES.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'cat-btn' + (cat.id === 'all' ? ' active' : '');
            btn.dataset.cat = cat.id;
            btn.innerHTML = `
                <span class="cat-icon">${cat.icon}</span>
                <span class="cat-name">${cat.name}</span>
                <span class="cat-count" id="count-${cat.id}">0</span>
            `;
            btn.addEventListener('click', () => setCategory(cat.id));
            scroll.appendChild(btn);
        });
    }

    function setCategory(catId) {
        currentCategory = catId;
        // 更新按钮状态
        document.querySelectorAll('.cat-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.cat === catId);
        });
        // 更新移动端抽屉
        document.querySelectorAll('.drawer-cat').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.cat === catId);
        });
        // 重新渲染
        renderDashboard();
        renderToolsGrid();
        closeMobileDrawer();
        // 滚动到工具区
        document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function updateCounts() {
        const allCount = TOOLS.length;
        document.getElementById('countAll').textContent = allCount;
        document.getElementById('toolCount').textContent = allCount;
        document.getElementById('statTools').textContent = allCount;

        CATEGORIES.forEach(cat => {
            const count = TOOLS.filter(t => t.category === cat.id).length;
            const el = document.getElementById('count-' + cat.id);
            if (el) el.textContent = count;
        });
    }

    // ============================================
    // 仪表盘分类卡片
    // ============================================
    function renderDashboard() {
        const grid = document.getElementById('dashboardGrid');
        const catsToShow = currentCategory === 'all'
            ? CATEGORIES
            : CATEGORIES.filter(c => c.id === currentCategory);

        grid.innerHTML = catsToShow.map(cat => {
            const tools = TOOLS.filter(t => t.category === cat.id);
            const featuredTools = tools.filter(t => t.featured || t.hot).slice(0, 3);
            const displayTools = featuredTools.length >= 3 ? featuredTools : tools.slice(0, 3);

            return `
                <div class="dash-card" data-cat="${cat.id}" onclick="window._setCategory('${cat.id}')">
                    <div style="position:absolute;top:0;left:0;right:0;height:4px;background:${cat.gradient};border-radius:var(--radius-lg) var(--radius-lg) 0 0;"></div>
                    <div class="dash-card-header">
                        <div class="dash-card-title">
                            <div class="dash-card-icon" style="background:${cat.gradient}22">${cat.icon}</div>
                            <div class="dash-card-name">${cat.name}</div>
                        </div>
                        <div class="dash-card-count">${tools.length} 个工具</div>
                    </div>
                    <div class="dash-card-desc">${cat.desc}</div>
                    <div class="dash-card-tools">
                        ${displayTools.map(t => `
                            <div class="dash-mini-tool" onclick="event.stopPropagation(); window._openModal('${t.id}')">
                                ${t.icon.startsWith('http') ? `<img src="${t.icon}" alt="" onerror="this.outerHTML='${t.icon}'">` : `<span>${t.icon}</span>`}
                                <span>${t.name}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="dash-card-tags">
                        ${cat.tags.slice(0, 5).map(tag => `<span class="dash-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    // 暴露给 onclick
    window._setCategory = setCategory;
    window._openModal = openModal;

    // ============================================
    // 工具卡片网格
    // ============================================
    function renderToolsGrid() {
        const grid = document.getElementById('toolsGrid');
        let tools = currentCategory === 'all'
            ? [...TOOLS]
            : TOOLS.filter(t => t.category === currentCategory);

        // 排序
        tools = sortTools(tools, currentSort);

        grid.innerHTML = tools.map(t => renderToolCard(t)).join('');

        // 绑定事件
        grid.querySelectorAll('.tool-card').forEach(card => {
            card.addEventListener('click', () => openModal(card.dataset.id));
        });

        // 绑定"打开"按钮（不触发弹窗）
        grid.querySelectorAll('.card-open-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                window.open(btn.dataset.url, '_blank');
            });
        });
    }

    function sortTools(tools, sort) {
        switch (sort) {
            case 'hot':
                return tools.sort((a, b) => (b.hot ? 1 : 0) - (a.hot ? 1 : 0) || (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            case 'name':
                return tools.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
            case 'difficulty':
                return tools.sort((a, b) => a.difficulty - b.difficulty);
            case 'pricing':
                const order = { free: 0, freemium: 1, paid: 2 };
                return tools.sort((a, b) => (order[a.pricing] || 3) - (order[b.pricing] || 3));
            default:
                return tools;
        }
    }

    function renderToolCard(tool) {
        const cat = CATEGORIES.find(c => c.id === tool.category);
        const starsText = '★'.repeat(tool.difficulty) + '☆'.repeat(5 - tool.difficulty);

        return `
            <div class="tool-card" data-id="${tool.id}">
                <div class="tool-card-header">
                    <div class="tool-icon">
                        ${tool.icon.startsWith('http')
                            ? `<img src="${tool.icon}" alt="${tool.name}" onerror="this.outerHTML='${tool.icon}'">`
                            : tool.icon}
                    </div>
                    <div class="tool-info">
                        <div class="tool-name">
                            ${tool.name}
                            ${tool.hot ? '<span class="hot-badge">HOT</span>' : ''}
                        </div>
                        <div class="tool-pricing">${tool.pricingText} · ${cat ? cat.name : ''}</div>
                    </div>
                </div>
                <div class="tool-desc">${tool.desc}</div>
                <div class="tool-tags">
                    ${tool.tags.slice(0, 4).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                </div>
                <div class="tool-difficulty">
                    <span class="stars">${starsText}</span>
                    <span>${['', '极简', '简单', '中等', '较难', '专业'][tool.difficulty]}</span>
                </div>
            </div>
        `;
    }

    // ============================================
    // 排序按钮
    // ============================================
    function initSortButtons() {
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentSort = this.dataset.sort;
                renderToolsGrid();
            });
        });
    }

    // ============================================
    // 工具详情弹窗
    // ============================================
    function openModal(toolId) {
        const tool = TOOLS.find(t => t.id === toolId);
        if (!tool) return;

        const cat = CATEGORIES.find(c => c.id === tool.category);
        const starsText = '★'.repeat(tool.difficulty) + '☆'.repeat(5 - tool.difficulty);
        const pricingClass = tool.pricing === 'free' ? 'pricing-free'
            : tool.pricing === 'freemium' ? 'pricing-freemium' : 'pricing-paid';
        const pricingLabel = tool.pricing === 'free' ? '免费'
            : tool.pricing === 'freemium' ? '基础免费' : '付费';

        // 相关工具
        const related = (tool.related || [])
            .map(id => TOOLS.find(t => t.id === id))
            .filter(Boolean);

        const body = document.getElementById('modalBody');
        body.innerHTML = `
            <div class="modal-header">
                <div class="modal-icon">
                    ${tool.icon.startsWith('http')
                        ? `<img src="${tool.icon}" alt="${tool.name}" onerror="this.outerHTML='${tool.icon}'">`
                        : tool.icon}
                </div>
                <div>
                    <div class="modal-title">${tool.name}</div>
                    <span class="modal-pricing-badge ${pricingClass}">${pricingLabel} · ${tool.pricingText}</span>
                </div>
            </div>
            <div class="modal-desc">${tool.desc}</div>
            <div class="modal-meta">
                <div class="meta-item">
                    <div class="meta-label">难度等级</div>
                    <div class="meta-value"><span class="stars">${starsText}</span> ${['', '极简', '简单', '中等', '较难', '专业'][tool.difficulty]}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">适合人群</div>
                    <div class="meta-value">${tool.audience}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">所属分类</div>
                    <div class="meta-value">${cat ? cat.icon + ' ' + cat.name : ''}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">人群标签</div>
                    <div class="meta-value">${tool.audienceTags.join('、')}</div>
                </div>
            </div>
            <div class="modal-tags">
                ${tool.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
            </div>
            <div class="modal-actions">
                <a href="${tool.url}" target="_blank" rel="noopener" class="btn-visit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    打开官网
                </a>
                ${related.length > 0 ? `
                    <button class="btn-related" onclick="document.querySelectorAll('.modal-related').forEach(el=>el.style.display=el.style.display==='none'?'':'none')">
                        类似工具 (${related.length})
                    </button>
                ` : ''}
            </div>
            ${related.length > 0 ? `
                <div class="modal-related">
                    <h4>类似的工具</h4>
                    <div class="related-list">
                        ${related.map(r => `
                            <div class="related-item" onclick="window._openModal('${r.id}')">
                                ${r.icon.startsWith('http') ? `<img src="${r.icon}" alt="" onerror="this.outerHTML='${r.icon}'">` : `<span>${r.icon}</span>`}
                                <span>${r.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;

        const overlay = document.getElementById('modalOverlay');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        const overlay = document.getElementById('modalOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // 点击遮罩关闭
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    document.getElementById('modalClose').addEventListener('click', closeModal);

    // ============================================
    // 移动端菜单
    // ============================================
    function initMobileMenu() {
        const btn = document.getElementById('mobileMenuBtn');
        const drawer = document.getElementById('drawerContent');
        const overlay = document.getElementById('drawerOverlay');

        // 填充抽屉内容
        drawer.innerHTML = `
            <div class="mobile-search">
                <input type="text" id="mobileSearchInput" placeholder="🔍 搜索工具..." autocomplete="off">
            </div>
            <button class="drawer-cat active" data-cat="all">🌟 全部工具</button>
            ${CATEGORIES.map(cat => `
                <button class="drawer-cat" data-cat="${cat.id}">${cat.icon} ${cat.name}</button>
            `).join('')}
        `;

        // 抽屉分类点击
        drawer.querySelectorAll('.drawer-cat').forEach(btn => {
            btn.addEventListener('click', () => setCategory(btn.dataset.cat));
        });

        // 抽屉搜索
        const mobileInput = document.getElementById('mobileSearchInput');
        mobileInput.addEventListener('input', debounce(function() {
            const query = mobileInput.value.trim();
            // 同步到主搜索
            document.getElementById('searchInput').value = query;
            searchQuery = query;
            document.getElementById('searchClear').style.display = query ? 'flex' : 'none';
            performSearch();
            closeMobileDrawer();
        }, 200));

        // 汉堡按钮
        btn.addEventListener('click', function() {
            if (drawer.classList.contains('active')) {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });

        overlay.addEventListener('click', closeMobileDrawer);
    }

    function openMobileDrawer() {
        document.getElementById('drawerContent').classList.add('active');
        document.getElementById('drawerOverlay').classList.add('active');
        document.getElementById('mobileMenuBtn').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileDrawer() {
        document.getElementById('drawerContent').classList.remove('active');
        document.getElementById('drawerOverlay').classList.remove('active');
        document.getElementById('mobileMenuBtn').classList.remove('active');
        document.body.style.overflow = '';
    }

    // ============================================
    // 工具函数
    // ============================================
    function getCategoryName(catId) {
        const cat = CATEGORIES.find(c => c.id === catId);
        return cat ? cat.name : '';
    }

    function debounce(fn, delay) {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollToTop = scrollToTop;

})();
