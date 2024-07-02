 // tabbed content
 // http://www.entheosweb.com/tutorials/css/tabs.asp
 $(".header__wrap").hide();
 $(".header__wrap:first").show();
 $(".fixed__menu").hide();
 $(".fixed__menu:first").show();
 /* if in tab mode */
 $(".header__tabs li").click(function() {
     let wrap = $(".header__wrap")
     let wrapMobile = $(".fixed__menu")
     wrap.hide();
     wrapMobile.hide();
     var activeTab = $(this).attr("rel");
     $("#" + activeTab).fadeIn();
     console.log(activeTab);

     $(".header__tabs li > div").removeClass("active");
     $(this).find('div').addClass("active");


 });


 /* Extra class "tab_last"
    to add border to right side
    of last tab */
 $('.header__tabs li').last().addClass("tab_last");


