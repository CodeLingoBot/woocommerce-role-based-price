jQuery(document).ready(function(){
    if(jQuery('body').hasClass('post-type-product')){
        jQuery('#enable_simple_role_based_price').change(function(){
            jQuery('#'+jQuery(this).attr('data-target')).slideToggle();
        });
        jQuery('.enable_variable_role_based_price').change(function(){
            jQuery('#'+jQuery(this).attr('data-target')).slideToggle();
        });
    }
});