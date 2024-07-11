 // tabbed content
 // http://www.entheosweb.com/tutorials/css/tabs.asp

 /* if in tab mode */
 $(".header__tabs li").click(function() {
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


