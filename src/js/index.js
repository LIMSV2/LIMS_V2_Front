require("jquery");
require('bootstrap');
require("migrate");
require('imports?this=>window!modernizr');
require("sparkline");
require("toggles");
require("cookies");

/**
 * 此处放置公共的功能模块
 */
jQuery(document).ready(function () {
    //关闭加载load进度条
    jQuery('#preloader').delay(350).fadeOut(function () {
        jQuery('body').delay(350).css({'overflow': 'visible'});
    });
    //左侧菜单栏开闭
    jQuery('.leftpanel .nav-parent > a').on('click', function () {
        var parent = jQuery(this).parent();
        var sub = parent.find('> ul');
        // Dropdown works only when leftpanel is not collapsed
        if (!jQuery('body').hasClass('leftpanel-collapsed')) {
            if (sub.is(':visible')) {
                sub.slideUp(200, function () {
                    parent.removeClass('nav-active');
                    jQuery('.mainpanel').css({height: ''});
                    adjustmainpanelheight();
                });
            } else {
                closeVisibleSubMenu();
                parent.addClass('nav-active');
                sub.slideDown(200, function () {
                    adjustmainpanelheight();
                });
            }
        }
        return false;
    });
    // Tooltip
    jQuery('.tooltips').tooltip({container: 'body'});
    // Popover

    //jQuery('.popovers').popover();

    //调整MainPanel的高度
    adjustmainpanelheight();


    //关闭Panel方法
    jQuery('.panel .panel-close').click(function () {
        jQuery(this).closest('.panel').fadeOut(200);
        return false;
    });


    // 左侧信息概述
    jQuery('#sidebar-chart').sparkline([4, 3, 3, 1, 4, 3, 2, 2, 3, 10, 9, 6], {
        type: 'bar',
        height: '30px',
        barColor: scColor1
    });

    jQuery('#sidebar-chart2').sparkline([1, 3, 4, 5, 4, 10, 8, 5, 7, 6, 9, 3], {
        type: 'bar',
        height: '30px',
        barColor: '#D9534F'
    });

    jQuery('#sidebar-chart3').sparkline([5, 9, 3, 8, 4, 10, 8, 5, 7, 6, 9, 3], {
        type: 'bar',
        height: '30px',
        barColor: '#1CAF9A'
    });

    jQuery('#sidebar-chart4').sparkline([4, 3, 3, 1, 4, 3, 2, 2, 3, 10, 9, 6], {
        type: 'bar',
        height: '30px',
        barColor: scColor1
    });

    jQuery('#sidebar-chart5').sparkline([1, 3, 4, 5, 4, 10, 8, 5, 7, 6, 9, 3], {
        type: 'bar',
        height: '30px',
        barColor: '#F0AD4E'
    });


// Form Toggles
    jQuery('.toggle').toggles({on: true});

    jQuery('.toggle-chat1').toggles({on: false});


    //改变皮肤
    var scColor1 = '#428BCA';
    if (jQuery.cookie('change-skin') && jQuery.cookie('change-skin') == 'bluenav') {
        scColor1 = '#fff';
    }


// Minimize Button in Panels
    jQuery('.minimize').click(function () {
        var t = jQuery(this);
        var p = t.closest('.panel');
        if (!jQuery(this).hasClass('maximize')) {
            p.find('.panel-body, .panel-footer').slideUp(200);
            t.addClass('maximize');
            t.html('&plus;');
        } else {
            p.find('.panel-body, .panel-footer').slideDown(200);
            t.removeClass('maximize');
            t.html('&minus;');
        }
        return false;
    });


// Add class everytime a mouse pointer hover over it
    jQuery('.nav-bracket > li').hover(function () {
        jQuery(this).addClass('nav-hover');
    }, function () {
        jQuery(this).removeClass('nav-hover');
    });


// Menu Toggle
    jQuery('.menutoggle').click(function () {

        var body = jQuery('body');
        var bodypos = body.css('position');

        if (bodypos != 'relative') {

            if (!body.hasClass('leftpanel-collapsed')) {
                body.addClass('leftpanel-collapsed');
                jQuery('.nav-bracket ul').attr('style', '');

                jQuery(this).addClass('menu-collapsed');

            } else {
                body.removeClass('leftpanel-collapsed chat-view');
                jQuery('.nav-bracket li.active ul').css({display: 'block'});

                jQuery(this).removeClass('menu-collapsed');

            }
        } else {

            if (body.hasClass('leftpanel-show'))
                body.removeClass('leftpanel-show');
            else
                body.addClass('leftpanel-show');

            adjustmainpanelheight();
        }

    });

// Chat View
    jQuery('#chatview').click(function () {

        var body = jQuery('body');
        var bodypos = body.css('position');

        if (bodypos != 'relative') {

            if (!body.hasClass('chat-view')) {
                body.addClass('leftpanel-collapsed chat-view');
                jQuery('.nav-bracket ul').attr('style', '');

            } else {

                body.removeClass('chat-view');

                if (!jQuery('.menutoggle').hasClass('menu-collapsed')) {
                    jQuery('body').removeClass('leftpanel-collapsed');
                    jQuery('.nav-bracket li.active ul').css({display: 'block'});
                } else {

                }
            }

        } else {

            if (!body.hasClass('chat-relative-view')) {

                body.addClass('chat-relative-view');
                body.css({left: ''});

            } else {
                body.removeClass('chat-relative-view');
            }
        }

    });

    reposition_topnav();
    reposition_searchform();

    jQuery(window).resize(function () {

        if (jQuery('body').css('position') == 'relative') {

            jQuery('body').removeClass('leftpanel-collapsed chat-view');

        } else {

            jQuery('body').removeClass('chat-relative-view');
            jQuery('body').css({left: '', marginRight: ''});
        }


        reposition_searchform();
        reposition_topnav();

    });


    /* This function will reposition search form to the left panel when viewed
     * in screens smaller than 767px and will return to top when viewed higher
     * than 767px
     */
    function reposition_searchform() {
        if (jQuery('.searchform').css('position') == 'relative') {
            jQuery('.searchform').insertBefore('.leftpanelinner .userlogged');
        } else {
            jQuery('.searchform').insertBefore('.header-right');
        }
    }


    /* This function allows top navigation menu to move to left navigation menu
     * when viewed in screens lower than 1024px and will move it back when viewed
     * higher than 1024px
     */
    function reposition_topnav() {
        if (jQuery('.nav-horizontal').length > 0) {

            // top navigation move to left nav
            // .nav-horizontal will set position to relative when viewed in screen below 1024
            if (jQuery('.nav-horizontal').css('position') == 'relative') {

                if (jQuery('.leftpanel .nav-bracket').length == 2) {
                    jQuery('.nav-horizontal').insertAfter('.nav-bracket:eq(1)');
                } else {
                    // only add to bottom if .nav-horizontal is not yet in the left panel
                    if (jQuery('.leftpanel .nav-horizontal').length == 0)
                        jQuery('.nav-horizontal').appendTo('.leftpanelinner');
                }

                jQuery('.nav-horizontal').css({display: 'block'})
                    .addClass('nav-pills nav-stacked nav-bracket');

                jQuery('.nav-horizontal .children').removeClass('dropdown-menu');
                jQuery('.nav-horizontal > li').each(function () {

                    jQuery(this).removeClass('open');
                    jQuery(this).find('a').removeAttr('class');
                    jQuery(this).find('a').removeAttr('data-toggle');

                });

                if (jQuery('.nav-horizontal li:last-child').has('form')) {
                    jQuery('.nav-horizontal li:last-child form').addClass('searchform').appendTo('.topnav');
                    jQuery('.nav-horizontal li:last-child').hide();
                }

            } else {
                // move nav only when .nav-horizontal is currently from leftpanel
                // that is viewed from screen size above 1024
                if (jQuery('.leftpanel .nav-horizontal').length > 0) {

                    jQuery('.nav-horizontal').removeClass('nav-pills nav-stacked nav-bracket')
                        .appendTo('.topnav');
                    jQuery('.nav-horizontal .children').addClass('dropdown-menu').removeAttr('style');
                    jQuery('.nav-horizontal li:last-child').show();
                    jQuery('.searchform').removeClass('searchform').appendTo('.nav-horizontal li:last-child .dropdown-menu');
                    jQuery('.nav-horizontal > li > a').each(function () {

                        jQuery(this).parent().removeClass('nav-active');

                        if (jQuery(this).parent().find('.dropdown-menu').length > 0) {
                            jQuery(this).attr('class', 'dropdown-toggle');
                            jQuery(this).attr('data-toggle', 'dropdown');
                        }

                    });
                }

            }

        }
    }


// Sticky Header
    if (jQuery.cookie('sticky-header'))
        jQuery('body').addClass('stickyheader');

// Sticky Left Panel
    if (jQuery.cookie('sticky-leftpanel')) {
        jQuery('body').addClass('stickyheader');
        jQuery('.leftpanel').addClass('sticky-leftpanel');
    }

// Left Panel Collapsed
    if (jQuery.cookie('leftpanel-collapsed')) {
        jQuery('body').addClass('leftpanel-collapsed');
        jQuery('.menutoggle').addClass('menu-collapsed');
    }

// Changing Skin
    var c = jQuery.cookie('change-skin');
    var cssSkin = 'css/style.' + c + '.css';
    if (jQuery('body').css('direction') == 'rtl') {
        cssSkin = '../css/style.' + c + '.css';
        jQuery('html').addClass('rtl');
    }
    if (c) {
        jQuery('head').append('<link id="skinswitch" rel="stylesheet" href="' + cssSkin + '" />');
    }

// 改变字体
    var fnt = jQuery.cookie('change-font');
    if (fnt) {
        jQuery('head').append('<link id="fontswitch" rel="stylesheet" href="css/font.' + fnt + '.css" />');
    }

    if (jQuery('body').hasClass('leftpanel-collapsed'))
        jQuery('.nav-bracket .children').css({display: ''});


// 阻止form点击事件冒泡
    jQuery('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });


//这是一种改变皮肤的方式
    var c = jQuery.cookie('change-skin');
    if (c && c == 'greyjoy') {
        $('.btn-primary').removeClass('btn-primary').addClass('btn-orange');
        $('.rdio-primary').addClass('rdio-default').removeClass('rdio-primary');
        $('.text-primary').removeClass('text-primary').addClass('text-orange');
    }

    /**
     * 右上角消息弹出框
     * @param text
     * @param type
     * @returns {boolean}
     */
    jQuery.fn.alert_msg = function (text, type) {
        jQuery.gritter.add({
            title: "执行结果",
            text: text,
            //class_name: 'growl-' + (type == 'success' ? 'success' : 'danger'),
            class_name: 'growl-success',
            image: '/assets/images/screen.png',
            sticky: false,
            time: ''
        });
        return false;
    };

    /**
     * 消息确认框
     * opt:json msg:提示内容,success:handle
     * @param opt
     */
    jQuery.fn.check_msg = function (opt) {
        jQuery('#msg_body').html(opt.msg);
        jQuery('#myModal').modal('show');
        jQuery('#check_true').off('click').on('click', function () {
            opt.success && opt.success();

            jQuery('#myModal').modal('hide');
        });
    };

    /**
     * 复选框全选 / 反选操作
     * @param name
     * @param type
     */
    jQuery.fn.select_all = function (name, type) {
        if (type == "all") {
            jQuery('[name=' + name + ']').each(function (index, oCheckbox) {
                jQuery(oCheckbox).prop('checked', true);
            });
        } else {
            jQuery('[name=' + name + ']').each(function (index, oCheckbox) {
                jQuery(oCheckbox).prop('checked', !jQuery(oCheckbox).prop('checked'));
            });
        }

    };

    /**
     * 通过Ajax的方式加载模板
     * @param path
     * @returns {string}
     */
    jQuery.fn.loadTemplate = function (path) {
        var template = "";
        $.ajax({
            type: "GET",
            url: path,
            async: false,
            success: function (data) {
                template = data;
            }
        });
        return template;
    };

    /**
     * 根据code的值进行不同的处理
     * opt:JSON key:code代码,value:handle or string
     * @param code
     * @param opt
     */
    jQuery.fn.codeState = function (code, opt) {
        if (!code) return;
        if (code == 200) {
            opt[200] ? opt[200]() : jQuery.fn.alert_msg('操作成功！', 'success');
        }
        if (code == 500) {
            if (opt[500] && typeof opt[500] == "string") {
                jQuery.fn.alert_msg(opt[500], 'error');
            } else {
                opt[500] ? opt[500]() : jQuery.fn.alert_msg('目前已存在当前值,不能重复操作！', 'error');
            }

        }
        if (code == 501) {
            if (opt[501] && typeof opt[501] == "string") {
                jQuery.fn.alert_msg(opt[501], 'error');
            } else {
                opt[501] ? opt[501]() : jQuery.fn.alert_msg('数据值不能为空,请检查后重新操作！', 'error');
            }
        }
        if (code == 502) {
            if (opt[502] && typeof opt[502] == "string") {
                jQuery.fn.alert_msg(opt[502], 'error');
            }
            opt[502] ? opt[502]() : jQuery.fn.alert_msg('请求异常,请重新尝试操作！', 'error');
        }
    };
    function closeVisibleSubMenu() {
        jQuery('.leftpanel .nav-parent').each(function () {
            var t = jQuery(this);
            if (t.hasClass('nav-active')) {
                t.find('> ul').slideUp(200, function () {
                    t.removeClass('nav-active');
                });
            }
        });
    }

    /**
     * 调整mainpanel的高度
     */
    function adjustmainpanelheight() {
        var docHeight = jQuery(document).height();
        if (docHeight > jQuery('.mainpanel').height())
            jQuery('.mainpanel').height(docHeight);
    }

});

/**
 * 表格部分操作
 */
jQuery('.nav-item').on('click', function () {
    var title = jQuery(this).data("title");
    var desp = jQuery(this).data("desp");
    var icon = jQuery(this).parents('ul:eq(0)').data("icon");
    jQuery('#title').html('<i class="' + icon + '"></i> ' + title + ' <span>' + desp + '</span>');
    var type = jQuery(this).data('type');

    var rowCount = sessionStorage.getItem("rowCount");
    if (!rowCount) rowCount = 0;

    if (type == "department") {
        jQuery.get("/assets/json/" + type + ".json", {pageCount: 1, rowCount: rowCount}, function (obj) {
            var modal_tpl = template.compile(jQuery.fn.loadTemplate('/assets/template/items/' + type + '.tpl'));
            var modal_body = modal_tpl(obj.modal);
            obj.body = modal_body;
            var render = template.compile(jQuery.fn.loadTemplate('/assets/template/table.tpl'));
            var html = render(obj);
            $('#contentpanel').html(html);


            //绑定鼠标移入显示"操作"按钮
            jQuery('.table-hidaction tbody tr').hover(function () {
                jQuery(this).find('.table-action-hide a').animate({opacity: 1});
            }, function () {
                jQuery(this).find('.table-action-hide a').animate({opacity: 0});
            });

            //搜索框事件
            jQuery("#serach").keyup(function () {
                if (event.keyCode == 13) {
                    var data = jQuery(this).val();
                    console.log('按下回车了,数据为' + data);
                }
            });

            //页码事件
            // $('.paging').pagination({
            //     pageCount: obj.pageCount,
            //     coping: true,
            //     homePage: '首页',
            //     endPage: '末页',
            //     prevContent: '上页',
            //     nextContent: '下页',
            //     current: obj.currentPage,
            //     callback: function (page) {
            //         console.log(page.getCurrent());
            //     }
            // });

            $.validator.setDefaults({
                submitHandler: function () {
                }
            });
        })
    } else {
        jQuery.get("/assets/template/" + type + ".tpl", function (data) {
            $('#contentpanel').html(data);
        });
        //页码事件
        // $('.paging').pagination({
        //     pageCount: 20,
        //     coping: true,
        //     homePage: '首页',
        //     endPage: '末页',
        //     prevContent: '上页',
        //     nextContent: '下页',
        //     current: 1,
        //     callback: function (page) {
        //         console.log(page.getCurrent());
        //     }
        // });

    }
});