 <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">创建业务合同</h4>
                </div>
                <div class="panel-body panel-body-nopadding">

                    <!-- BASIC WIZARD -->
                    <div id="validationWizard" class="basic-wizard">

                        <ul class="nav nav-pills nav-justified">
                            <li><a href="#vtab1" data-toggle="tab"><span>第一步:</span> 基本信息</a></li>
                            <li><a href="#vtab2" data-toggle="tab"><span>第二步:</span> 监测内容</a></li>
                            <li><a href="#vtab3" data-toggle="tab"><span>第三步:</span> 其他约定</a></li>
                            <li><a href="#vtab4" data-toggle="tab"><span>第四步:</span> 预览合同</a></li>
                        </ul>


                        <form class="form" id="firstForm">
                            <div class="tab-content">
                                <div class="progress progress-striped active">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                                <div class="tab-pane" id="vtab1">
                                    <div class="form-group">
                                        <hr>
                                        <h3 class="text-center">甲方信息<a
                                                class="btn btn-sm btn-success-alt pull-right " data-toggle="modal"
                                                data-target=".bs-example-modal-static"
                                                v-on:click="open_dialog">导入客户资料</a>
                                        </h3>
                                        <hr/>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">委托单位 </label>
                                        <div class="col-sm-4">
                                            <input type="text" name="client_unit" v-model="client_unit"
                                                   class="form-control"
                                                   required/>
                                        </div>
                                        <label class="col-sm-2 control-label text-center">邮政编码</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="client_code" v-model="client_code"
                                                   class="form-control"
                                                   required/>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">联系地址</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="client_address" v-model="client_address"
                                                   class="form-control" required/>
                                        </div>
                                        <label class="col-sm-2 control-label text-center">联系电话</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="client_tel" v-model="client_tel"
                                                   class="form-control"
                                                   required/>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">联系人</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="client" v-model="client"
                                                   class="form-control" required/>
                                        </div>
                                        <label class="col-sm-2 control-label text-center">传真电话</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="client_fax" v-model="client_fax"
                                                   class="form-control"
                                                   required/>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <hr>
                                        <h3 class="text-center">乙方信息 <a
                                                class="btn btn-sm btn-success-alt pull-right "
                                                v-on:click="default_info">导入预设</a>
                                        </h3>

                                        <hr/>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">受托单位</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="trustee_unit" v-model="trustee_unit"
                                                   class="form-control" required/>
                                        </div>
                                        <label class="col-sm-2 control-label text-center">邮政编码</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="trustee_code" v-model="trustee_code"
                                                   class="form-control" required/>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">联系地址</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="trustee_address" v-model="trustee_address"
                                                   class="form-control" required/>
                                        </div>
                                        <label class="col-sm-2 control-label text-center">联系电话</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="trustee_tel" v-model="trustee_tel"
                                                   class="form-control"
                                                   required/>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">承办人</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="trustee" v-model="trustee" class="form-control"
                                                   required/>
                                        </div>
                                        <label class="col-sm-2 control-label text-center">传真电话</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="trustee_fax" v-model="trustee_fax"
                                                   class="form-control"
                                                   required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="vtab2">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">项目名称</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="firstname1" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">监测目的</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">监测类别</label>
                                        <div class="col-sm-10">
                                            <select class="select2" data-placeholder="选择监测类别" required>
                                                <option value=""></option>
                                                <option value="ys">验收监测</option>
                                                <option value="hp">环评监测</option>
                                                <option value="wt">委托监测</option>
                                                <option value="zf">执法监测</option>
                                                <option value="lx">例行监测</option>
                                                <option value="yj">应急监测</option>
                                                <option value="jd">监督监测</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">检测方法</label>
                                        <div class="col-sm-10">
                                            <div class="rdio rdio-primary">
                                                <input type="radio" checked id="male4" value="m" name="gender"
                                                       required/>
                                                <label for="male4">以我单位通过计量认证、国家实验室认可的方法进行检测</label>
                                            </div>
                                            <div class="rdio rdio-primary">
                                                <input type="radio" value="f" id="female4" name="gender"/>
                                                <label for="female4">客户指定的方法:</label>
                                                <input type="text" name="firstname1" class="form-control " disabled/>
                                            </div>
                                            <label class="error" for="gender"></label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">监测项目</label>
                                        <div class="col-sm-10">
                                            <div class="table-responsive">
                                                <table class="table table-info mb30">
                                                    <thead>
                                                    <tr>
                                                        <th class="text-center">序号</th>
                                                        <th class="text-center">环境要素</th>
                                                        <th class="text-center">监测点(个)</th>
                                                        <th class="text-center">监测项目</th>
                                                        <th class="text-center">监测频次</th>
                                                        <th class="text-center">备注</th>
                                                        <th class="text-center"></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td class="text-center">1</td>
                                                        <td class="text-center">固体废弃物</td>
                                                        <td class="text-center">3</td>
                                                        <td class="text-center">三氧化二硫</td>
                                                        <td class="text-center">2次/天</td>
                                                        <td class="text-center">采样点共有多个</td>
                                                        <td class="table-action">
                                                            <a href=""><i class="fa fa-pencil"></i></a>
                                                            <a href="" class="delete-row"><i class="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">2</td>
                                                        <td class="text-center">固体废弃物</td>
                                                        <td class="text-center">3</td>
                                                        <td class="text-center">三氧化二硫</td>
                                                        <td class="text-center">2次/天</td>
                                                        <td class="text-center">采样点共有多个</td>
                                                        <td class="table-action">
                                                            <a href=""><i class="fa fa-pencil"></i></a>
                                                            <a href="" class="delete-row"><i class="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">3</td>
                                                        <td class="text-center">固体废弃物</td>
                                                        <td class="text-center">3</td>
                                                        <td class="text-center">三氧化二硫</td>
                                                        <td class="text-center">2次/天</td>
                                                        <td class="text-center">采样点共有多个</td>
                                                        <td class="table-action">
                                                            <a href=""><i class="fa fa-pencil"></i></a>
                                                            <a href="" class="delete-row"><i class="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table-action" colspan="7">
                                                            <a href="javascript:;"><i class="fa fa-plus"></i> 新增</a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div><!-- table-responsive -->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">分包单位</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="firstname5" class="form-control" required/>
                                        </div>
                                        <label class="col-sm-2 control-label text-center">分包项目</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="firstname6" class="form-control" required/>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane" id="vtab3">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">交付方式</label>
                                        <div class="col-sm-10">
                                            <select class="select2" data-placeholder="选择交付方式" required>
                                                <option value=""></option>
                                                <option value="ys">客户自取</option>
                                                <option value="hp">挂号邮寄</option>
                                                <option value="wt">其他方式</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">完成时间</label>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="mm/dd/yyyy"
                                                       id="datepicker-multiple">
                                                <span class="input-group-addon"><i
                                                        class="glyphicon glyphicon-calendar"></i></span>
                                            </div>
                                        </div>
                                        <label class="col-sm-2 control-label text-center">监测费用(元)</label>
                                        <div class="col-sm-4">
                                            <input type="text" name="firstname12" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">客户要求</label>
                                        <div class="col-sm-10">
                                            <div class="checkbox block"><label><input type="checkbox">
                                                客户需要进入实验室监视与本次委托有关的检测活动</label></div>
                                            <div class="checkbox block"><label><input type="checkbox">
                                                客户需要本实验室对本次委托有关资料保密</label></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label text-center">其他约定</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" rows="5"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="vtab4">

                                    <div class="col-sm-12">
                                        <div class="table-responsive">
                                            <table class="table table-bordered  mb30">
                                                <thead>
                                                <tr>
                                                    <th class="text-center" colspan="7">环境监测业务合同</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td class="text-center" rowspan="3">甲方信息</td>
                                                    <td class="text-center">委托单位</td>
                                                    <td class="text-center" colspan="2">江苏省镇江市京口区江苏大学</td>
                                                    <td class="text-center">邮政编码</td>
                                                    <td class="text-center" colspan="2">212000</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">联系地址</td>
                                                    <td class="text-center" colspan="2">江苏省镇江市京口区江苏大学</td>
                                                    <td class="text-center">联系电话</td>
                                                    <td class="text-center" colspan="2">212000</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">联系人</td>
                                                    <td class="text-center" colspan="2">江苏省镇江市京口区江苏大学</td>
                                                    <td class="text-center">传真电话</td>
                                                    <td class="text-center" colspan="2">212000</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center" rowspan="6">项目名称</td>
                                                    <td class="text-center">项目名称</td>
                                                    <td class="text-center" colspan="5">项目名称简介</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">监测目的</td>
                                                    <td class="text-center" colspan="5">监测目的简介</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">监测类别</td>
                                                    <td class="text-center" colspan="5">验收监测</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">监测项目</td>
                                                    <td class="text-center" colspan="5">验收监测</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">检测方法</td>
                                                    <td class="text-center" colspan="5">以我单位通过计量认证、国家实验室认可的方法进行检测</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">分包单位</td>
                                                    <td class="text-center">江苏省常州市某公司</td>
                                                    <td class="text-center">分包项目</td>
                                                    <td class="text-center" colspan="3">关于xxxx的项目</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center" rowspan="2">报告</td>
                                                    <td class="text-center">交付方式</td>
                                                    <td class="text-center" colspan="5">客户自取</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">完成时间</td>
                                                    <td class="text-center" colspan="2">2017年12月31日</td>
                                                    <td class="text-center">监测费用(¥)</td>
                                                    <td class="text-center">123.00</td>
                                                    <td class="text-center">壹佰贰拾叁圆</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">客户要求</td>
                                                    <td class="text-center" colspan="2">客户需要进入实验室监视与本次委托有关的检测活动</td>
                                                    <td class="text-center">否</td>
                                                    <td class="text-center" colspan="2">客户需要本实验室对本次委托有关资料保密</td>
                                                    <td class="text-center">否</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">其他约定</td>
                                                    <td colspan="7">这里是和客户进行其他约定的地方,这里是和客户进行其他约定的地方,这里是和客户进行其他约定的地方.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center" rowspan="3">乙方信息</td>
                                                    <td class="text-center">受托单位</td>
                                                    <td class="text-center" colspan="2">江苏省镇江市京口区江苏大学</td>
                                                    <td class="text-center">邮政编码</td>
                                                    <td class="text-center" colspan="2">212000</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">联系地址</td>
                                                    <td class="text-center" colspan="2">江苏省镇江市京口区江苏大学</td>
                                                    <td class="text-center">联系电话</td>
                                                    <td class="text-center" colspan="2">212000</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">承办人</td>
                                                    <td class="text-center" colspan="2">江苏省镇江市京口区江苏大学</td>
                                                    <td class="text-center">传真电话</td>
                                                    <td class="text-center" colspan="2">212000</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div><!-- table-responsive -->
                                    </div>
                                </div>

                            </div><!-- tab-content -->
                        </form>

                        <ul class="pager wizard">
                            <li class="previous"><a href="javascript:void(0)">上一项</a></li>
                            <li class="next"><a href="javascript:void(0)">下一项</a></li>
                            <li class="draft"><a href="javascript:void(0)">存为草稿</a></li>
                            <li class="finish"><a href="javascript:void(0)">完成创建</a></li>
                        </ul>

                    </div><!-- #validationWizard -->

                </div><!-- panel-body -->
            </div><!-- panel -->
        </div>
    </div>


 <script type="text/javascript">
     var $validator = jQuery("#firstForm").validate({
         highlight: function (element) {
             jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
         },
         success: function (element) {
             jQuery(element).closest('.form-group').removeClass('has-error');
         }
     });

     jQuery('#validationWizard').bootstrapWizard({
         tabClass: 'nav nav-pills nav-justified nav-disabled-click',
         'nextSelector': '.next',
         'previousSelector': '.previous',
         onInit: function () {
             jQuery('.wizard .finish').hide();
             jQuery('.wizard .draft').hide();
         },
         onTabClick: function (tab, navigation, index) {
             return false;
         },
         onNext: function (tab, navigation, index) {
             var $total = navigation.find('li').length;
             var $current = index + 1;
             var $percent = ($current / $total) * 100;
             jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');

             //                var $valid = jQuery('#firstForm').valid();
             //                if (!$valid) {
             //                    $validator.focusInvalid();
             //                    return false;
             //                }

             if (index >= 3) {
                 jQuery('.wizard .finish').show();
                 jQuery('.wizard .draft').show();
             } else {
                 jQuery('.wizard .finish').hide();
                 jQuery('.wizard .draft').hide();
             }
         },
         onPrevious: function (tab, navigation, index) {
             var $total = navigation.find('li').length;
             var $current = index + 1;
             var $percent = ($current / $total) * 100;
             jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');
             if (index >= 3) {
                 jQuery('.wizard .finish').show();
                 jQuery('.wizard .draft').show();
             } else {
                 jQuery('.wizard .finish').hide();
                 jQuery('.wizard .draft').hide();
             }
         },
         onTabShow: function (tab, navigation, index) {
             var $total = navigation.find('li').length;
             var $current = index + 1;
             var $percent = ($current / $total) * 100;
             jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');
         }
     });

     jQuery(".select2").select2({
         width: '100%',
         minimumResultsForSearch: -1
     });
     jQuery('#datepicker-multiple').datepicker({
         numberOfMonths: 3,
         showButtonPanel: true
     });
 </script>