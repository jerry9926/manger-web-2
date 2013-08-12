(function(Manage){
	Manage.init = function(){
		$('#sideList a').click(function(){
			var page = $(this).attr('id');
			Manage.pageChoice(page);
		})
		Manage.postBoxInit();
		Manage.backInit();
	}

	Manage.pageChoice = function(type){
		$('#contentBox .page').hide();
		
		var id = type.substring(0,type.indexOf('Side')) + 'Box';
		$('#'+id+'').show();
	}

	Manage.postBoxInit = function(){
		$('#datepickerFrom-post').datebox({
			required:true
		});
		$('#datepickerTo-post').datebox({
			required:true
		});
		$('#userNameBtn-post').linkbutton({
			text: '搜索',
			iconCls: 'icon-search'
		})
		$('#keywordBtn-post').linkbutton({
			text: '搜索',
			iconCls: 'icon-search'
		})
		$('#postTypeSelect-post').combobox({
			valueField:'id',
			textField:'text'
		})
		$('#postTypeBtn-post').linkbutton({
			text: '搜索',
			iconCls: 'icon-search'
		})
		$('#postList').datagrid({
			// title:'帖子审核',
			iconCls:'icon-edit',
			nowrap: false,
			striped: true,
			collapsible:false,
			url:'resouce/post-data.json',
			sortName: 'code',
			sortOrder: 'desc',
			remoteSort: false,
			idField:'code',
			frozenColumns:[[
				{field:'ck',checkbox:true}
			]],
			columns:[
				[
					{title:'发帖时间',field:'time',width:100,align:'center'},
					{title:'发帖内容',field:'content',width:300,align:'center'},
					{title:'发帖者',field:'name',width:100,align:'center'},
					{title:'赞',field:'good',width:50,align:'center'},
					{title:'踩',field:'bad',width:50,align:'center'},
					{title:'回复',field:'reply',width:50,align:'center'},
					{field:'opt',title:'操作',width:150,align:'center',
						formatter:function(value,rowData,rowIndex){
							// console.log(rowIndex);
							var btn = '<a href="javascript:void(0);" id="btn_'+rowIndex+'">删除</a>';
							
							// setTimeout(function(){
							// 	$('#btn_'+rowIndex+'').linkbutton({
							// 		text: '剔除',
							// 		iconCls: 'icon-cut'
							// 	});	
							// },300)
							return btn;

						}
					}
				]
			],
			pagination:true,
			pageNumber: 1,
			pageSize: 10,
			rownumbers:true,
			toolbar:[
			{
				id:'postDelBtn',
				text:'批量删除',
				iconCls:'icon-cut',
				handler:function(){
					$('#postDelBtn').linkbutton({plain:false});
					$('#postDelBtn').linkbutton('enable');
					alert('delete')
				}
			},
			{
				id:'postUpBtn',
				text:'批量精华帖',
				iconCls:'icon-add',
				handler:function(){
					$('#postUpBtn').linkbutton({plain:false});
					$('#postUpBtn').linkbutton('enable');
					alert('add')
				}
			},
			]
		});
	}

	Manage.backInit = function(){
		$('#backList').datagrid({
			// title:'黑名单',
			iconCls:'icon-edit',
			nowrap: false,
			striped: true,
			collapsible:false,
			url:'resouce/back-data.json',
			sortName: 'code',
			sortOrder: 'desc',
			remoteSort: false,
			idField:'code',
			frozenColumns:[[
				{field:'ck',checkbox:true}
			]],
			columns:[
				[
					{title:'加入时间',field:'time',width:200,align:'center'},
					{title:'用户昵称',field:'name',width:200,align:'center'},
					{field:'opt',title:'操作',width:200,align:'center',
						formatter:function(value,rowData,rowIndex){
							// console.log(rowIndex);
							var btn = '<a href="javascript:void(0);" id="btn_'+rowIndex+'">剔除</a>';
							
							// setTimeout(function(){
							// 	$('#btn_'+rowIndex+'').linkbutton({
							// 		text: '剔除',
							// 		iconCls: 'icon-cut'
							// 	});	
							// },300)
							return btn;

						}
					}
				]
			],
			pagination:true,
			pageNumber: 1,
			pageSize: 10,
			rownumbers:true,
			toolbar:[{
				id:'btndel',
				text:'批量剔除',
				iconCls:'icon-cut',
				handler:function(){
					$('#btndel').linkbutton({plain:false});
					$('#btndel').linkbutton('enable');
					alert('delete')
				}
			}]
		});
		
		var listPager = $('#backList').datagrid('getPager');
		$(listPager).pagination({
			pageSize: 10,
			showPageList: false
		});
	}

})(window.Manage = window.Manage || {})

$(function(){
	Manage.init();
})