/* UI BUILD: Sunday, Apr 14 2013 at  8:05:21 PM */
/* MD5: ac6c88a0f096b626cd87556080852c06 */

var ns={Register:function(e){var t=false;var n="";var r=e.split(".");for(var i=0;i<r.length;i++){if(n!==""){n+="."}n+=r[i];t=this.Exists(n);if(!t){this.Create(n)}}if(t){throw"Namespace: "+e+" is already defined."}},Create:function(_Src){eval("window."+_Src+" = new Object();")},Exists:function(_Src){eval("var NE = false; try{if("+_Src+"){NE = true;}else{NE = false;}}catch(err){NE=false;}");return NE}};ns.Register("CTG");CTG.Track=function(){return{debug_level:0,pagename:track.catName,pageset:0,track_string:"",link_type:"",link_header:"",link_clicked:"",ttype:"CTG",setDebug:function(){var e,t,n,r="ctgdbg";r=r.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");e="[\\?&]"+r+"=([^&#]*)";t=new RegExp(e);n=t.exec(window.location.href);if(n==null){}else{this.debug_level=n[1]}},setPagename:function(e){this.pagename=e;this.pageset=1},elementBind:function(e,t,n){if($(t).length!==0){$(e).on("mousedown.ctg",t,n);if(this.debug_level>=1&&this.debug_level<=3){$(e).find(t).css("background","#99FF99")}if(this.debug_level==4){if(typeof console!=="undefined"&&typeof console.log!=="undefined"){console.log("Bind: ID= "+e+" Ele= "+t)}}}},imageLink:function(e){var t,n,r,s,o=$(e).parents("li"),u="li";if(o.length===0){o=$(e).parent("div");u="div"}t=0;n="";r="";$(o).find("a").each(function(){if(n==$(this).attr("href")){t++}n=$(this).attr("href")});if(t>=1){s=$(o).find("a").length;for(i=0;i<=s;++i){r=$(o).find("a:eq("+i+")").text();if(r.length>1){this.link_clicked=r}}}else{if($(e).children("img").length>0&&u!="li"){this.link_clicked=$(e).children("img").attr("alt")}else{this.link_clicked=$(e).text()}}},appendSegment:function(e,t,n){t=this.trimSpaces(t);return e===null||e.length===0||e===""?t:e+n+t},trimSpaces:function(e){e=e.replace(/(^\s*)|(\s*$)/gi,"");e=e.replace(/[ ]{2,}/gi," ");e=e.replace(/\n /,"\n");return e},buildTString:function(){function e(e){e=e.replace(/[\r\n\t]+/g,"");return e}function t(e){e.replace(/&(lt|gt);/g,"").replace(/<\/?[^>]+(>|$)/g,"");return e}if(this.link_type!==""){this.track_string=this.appendSegment(this.track_string,this.link_type,":")}if(this.link_header!==""){this.track_string=this.appendSegment(this.track_string,this.link_header,":")}if(this.link_clicked!==""){this.track_string=this.appendSegment(this.track_string,this.link_clicked,":")}this.track_string=t(this.track_string);this.track_string=e(this.track_string)},sendTrackingData:function(e){var t=0;if(e){if(e.which==1){t=1}else{t=0}}else{t=1}if(t==1){this.buildTString();if(this.debug_level==2){alert(this.pagename+":"+this.ttype+":"+this.track_string)}if(this.pageset==1){trackEvent.event("event.link",{lid:this.pagename+":"+this.ttype+":"+this.track_string,lastLink:this.ttype+":"+this.track_string,page:this.pagename})}else{trackEvent.event("event.link",{lid:this.pagename+":"+this.ttype+":"+this.track_string,lastLink:this.ttype+":"+this.track_string})}}this.link_type="";this.link_header="";this.link_clicked="";this.track_string=""}}};