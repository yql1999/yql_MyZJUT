(function ($) {
    'use strict';
//----------------------------------------
// Language Bar
//----------------------------------------
    if ($('#language').length > 0) {
        $('.lang-select a').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('#language').slideToggle();
        });
    }
//----------------------------------------
// Fixed Header
//----------------------------------------
    if ($(".header-area,.menus-two,.header-three-area").length > 0 && $(window).width() > 1025) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300)
            {
                $(".header-area,.menus-two,.header-three-area").addClass('fixed-header animated fadeInDown');
            } else
            {
                $(".header-area,.menus-two,.header-three-area").removeClass('fixed-header animated fadeInDown');
            }
        });
    }
    if ($("#toggle-menu").length > 0 && $(window).width() > 319 && $(window).width() < 1025) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 150)
            {
                $("#toggle-menu").addClass('fixed-header animated fadeInDown');
            } else
            {
                $("#toggle-menu").removeClass('fixed-header animated fadeInDown');
            }
        });
    }

//----------------------------------------
// Donate button
//----------------------------------------
    if ($('.donate-buttons').length > 0) {
        $('.donate-buttons span').on('click', function () {
            $('.donate-buttons span.active').removeClass('active');
            $(this).addClass('active');
        });
    }


//----------------------------------------
// Mobile Menu
//----------------------------------------
    if ($('.mobile-menu-has-children').length > 0) {
        var activeClass = true;
        $('.mobile-menu-has-children > a').on('click', function (e) {
            e.preventDefault();
            if (activeClass) {
                $(this).parent('li').addClass('active');
                activeClass = false;
            } else
            {
                $(this).parent('li').removeClass('active');
                activeClass = true;
            }
            $(this).next('ul').slideToggle();
        });
    }
    if ($('.mobile-menu-toggle a').length > 0)
    {
        $('.mobile-menu-toggle a').on('click', function (e) {
            e.preventDefault();
            $('.mobile-menu > ul').slideToggle();
        });
    }});
