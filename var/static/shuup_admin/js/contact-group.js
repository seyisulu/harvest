"use strict";!function(){var t,e,a=parseInt($("#id_members-TOTAL_FORMS").val()),n=$("#contact_group_form .browse-widget:last").closest("tr"),i=n.clone();i.find("input").each(function(){var t=$(this).attr("name").replace("-"+(a-1)+"-","--");$(this).attr({name:t})}),$("#add-more").on("click",function(r){r.preventDefault(),t=i.clone(),e=t.clone(),e.find("input").each(function(){var t=$(this).attr("name").replace("--","-"+a+"-"),e="id_"+t;$(this).attr({name:t,id:e}).val("")}),a+=1,$("#id_members-TOTAL_FORMS").val(a),e.appendTo(n.closest("tbody")),n=e})}();
//# sourceMappingURL=contact-group.js.map
