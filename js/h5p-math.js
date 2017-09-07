var H5P = H5P || {};

(function ($) {
  $(document).ready(function () {
    // We need Drupal.settings
    if (window.Drupal === undefined) {
      window.Drupal = window.top.Drupal;
    }

    if (typeof window.CKEDITOR !== 'undefined') {
      // Add wiris plugin
      window.CKEDITOR.plugins.addExternal('lineutils', window.Drupal.settings.h5peditor.ckeditorPluginPath + '/lineutils/');
      window.CKEDITOR.plugins.addExternal('widgetselection', window.Drupal.settings.h5peditor.ckeditorPluginPath + '/widgetselection/');
      window.CKEDITOR.plugins.addExternal('widget', window.Drupal.settings.h5peditor.ckeditorPluginPath + '/widget/');
      window.CKEDITOR.plugins.addExternal('mathjax', window.Drupal.settings.h5peditor.ckeditorPluginPath + '/mathjax/');
    }
  });
})(H5P.jQuery);
