﻿import Speak = require("sitecore/shell/client/Speak/Assets/lib/core/1.2/SitecoreSpeak");

class Bootstrap3Tab extends Speak.ControlBase {
  // #region Public Properties
  // This region was generated by a tool. Changes to this region may cause incorrect behavior and will be lost if the code is regenerated.
  public IsVisible: boolean;
  public Tooltip: string;
  // #endregion

  initialized() {
    var $el = $(this.el);
    $el.tab();
  }
}

Sitecore.component(Bootstrap3Tab);
