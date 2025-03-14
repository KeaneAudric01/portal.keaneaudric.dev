var ai=function(){function i(t,e){e===void 0&&(e=[]),this._eventType=t,this._eventFunctions=e}return i.prototype.init=function(){var t=this;this._eventFunctions.forEach(function(e){typeof window<"u"&&window.addEventListener(t._eventType,e)})},i}();

// Keep only the dropdown functionality that's used in navigation
var J=globalThis&&globalThis.__assign||function(){return J=Object.assign||function(i){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var r in t)}return i},J.apply(this,arguments)},
// ...existing dropdown code...
N={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,ignoreClickOutsideClass:!1,onShow:function(){},onHide:function(){},onToggle:function(){}},Ke=function(){
    // ...existing dropdown implementation...
};

function le(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(i){var t=i.getAttribute("data-dropdown-toggle"),e=document.getElementById(t);if(e){var n=i.getAttribute("data-dropdown-placement"),r=i.getAttribute("data-dropdown-offset-skidding"),o=i.getAttribute("data-dropdown-offset-distance"),s=i.getAttribute("data-dropdown-trigger"),a=i.getAttribute("data-dropdown-delay"),l=i.getAttribute("data-dropdown-ignore-click-outside-class");new Ke(e,i,{placement:n||N.placement,triggerType:s||N.triggerType,offsetSkidding:r?parseInt(r):N.offsetSkidding,offsetDistance:o?parseInt(o):N.offsetDistance,delay:a?parseInt(a):N.delay,ignoreClickOutsideClass:l||N.ignoreClickOutsideClass})}else console.error('The dropdown element with id "'.concat(t,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}

typeof window<"u"&&(window.Dropdown=Ke,window.initDropdowns=le);

// Keep collapse functionality for mobile menu
// ...existing collapse code...

// Theme toggle functionality is already included in inline script tags

// Remove unused components:
// - Accordion
// - Carousel
// - Dismiss
// - Modal
// - Drawer  
// - Tabs
// - Tooltip
// - Popover
// - Dial
// - Snow effect (unless you plan to use it later)

function hn(){
    // Only initialize what you're using
    le(); // Dropdowns
    Zt(); // Collapse for mobile menu
}

typeof window<"u"&&(window.initFlowbite=hn);

var vn=new ai("load",[le, Zt]);
vn.init();
