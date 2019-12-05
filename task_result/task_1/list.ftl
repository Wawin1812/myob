<#assign item_list=["item1","item2","item3"]>
<#--  Assigning a array list with index value of 2  -->
<#list item_list[0..2] as index>
${index}
</#list>
