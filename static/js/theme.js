"use strict";

var dark = 'inverted';
var localStore = window.localStorage;

var darkHeaderElements = function darkHeaderElements() {
  var header = $('.dream-header');

  if (header.length) {
    var segments = $('.dream-header .ui.segment');
    var title = $('.dream-header .ui.top.segment .ui.header');
    var iconList = $('.dream-header .ui.top.segment .ui.list');
    var accordion = $('.dream-header .ui.segment .ui.accordion');
    segments.map(function () {
      $(this).toggleClass(dark);
    });
    title.toggleClass(dark);
    iconList.toggleClass(dark);
    accordion.toggleClass(dark);
  }
};

var darkBack = function darkBack() {
  var segments = $('.dream-back .ui.segment');

  if (segments.length) {
    segments.map(function () {
      $(this).toggleClass(dark);
    });
  }
};

var darkPostsSection = function darkPostsSection() {
  var segment = $('.ui.segment.dream-posts-section');

  if (segment.length) {
    segment.toggleClass(dark);
  }
};

var darkTagsSection = function darkTagsSection() {
  var segment = $('.ui.segment.dream-tags-section');

  if (segment.length) {
    segment.toggleClass(dark);
  }
};

var darkCategoriesSection = function darkCategoriesSection() {
  var segment = $('.ui.segment.dream-categories-section');

  if (segment.length) {
    segment.toggleClass(dark);
  }
};

var darkSingle = function darkSingle() {
  var segments = $('.dream-single .ui.segment');

  if (segments.length) {
    segments.map(function () {
      $(this).toggleClass(dark);
    });
    var title = $('.dream-single .ui.top.segment .ui.header');
    title.toggleClass(dark);
  }
};

var darkCards = function darkCards() {
  var cards = $('.dream-card');

  if (cards.length) {
    cards.map(function () {
      $(this).toggleClass(dark);
    });
  }
};

function toggleDark() {
  darkHeaderElements();
  darkCards();
  darkSingle();
  darkPostsSection();
  darkTagsSection();
  darkCategoriesSection();
  darkBack();
}

var isDark = localStore.getItem('hugo-theme-dream-is-dark');
var iconSwitchs = $('.theme-switch').toArray(); // Apply theme when first entering

if (isDark) {
  iconSwitchs.forEach(function (s) {
    return $(s).addClass('moon');
  });
  $('.darkonly').show();
  $('.lightonly').hide();
  toggleDark();
} else {
  iconSwitchs.forEach(function (s) {
    return $(s).addClass('sun');
  });
  $('.darkonly').hide();
  $('.lightonly').show();
}

var themeSwitch = function themeSwitch() {
  if (isDark) {
    iconSwitchs.forEach(function (s) {
      return $(s).removeClass('moon');
    });
    iconSwitchs.forEach(function (s) {
      return $(s).addClass('sun');
    });
    $('.darkonly').hide();
    $('.lightonly').show();
    localStore.removeItem('hugo-theme-dream-is-dark');
    isDark = null;
  } else {
    iconSwitchs.forEach(function (s) {
      return $(s).removeClass('sun');
    });
    iconSwitchs.forEach(function (s) {
      return $(s).addClass('moon');
    });
    localStore.setItem('hugo-theme-dream-is-dark', 'y');
    $('.darkonly').show();
    $('.lightonly').hide();
    isDark = 'y';
  }

  toggleDark();
};