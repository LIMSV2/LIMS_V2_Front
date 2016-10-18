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
                        <li><a href="#vtab1" data-toggle="tab"><span>Step 1:</span> Basic Info</a></li>
                        <li><a href="#vtab2" data-toggle="tab"><span>Step 2:</span> Product Info</a></li>
                        <li><a href="#vtab3" data-toggle="tab"><span>Step 3:</span> Payment</a></li>
                    </ul>

                    <form class="form" id="firstForm">
                        <div class="tab-content">

                            <div class="tab-pane" id="vtab1">
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Firstname</label>
                                    <div class="col-sm-8">
                                        <input type="text" name="firstname" class="form-control" required/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Lastname</label>
                                    <div class="col-sm-8">
                                        <input type="text" name="lastname" class="form-control" required/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Gender</label>
                                    <div class="col-sm-8">
                                        <div class="rdio rdio-primary">
                                            <input type="radio" id="male4" value="m" name="gender" required/>
                                            <label for="male4">Male</label>
                                        </div>
                                        <div class="rdio rdio-primary">
                                            <input type="radio" value="f" id="female4" name="gender"/>
                                            <label for="female4">Female</label>
                                        </div>
                                        <label class="error" for="gender"></label>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane" id="vtab2">
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Product ID</label>
                                    <div class="col-sm-5">
                                        <input type="text" name="product_id" class="form-control" required/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Product Name</label>
                                    <div class="col-sm-8">
                                        <input type="text" name="product_name" class="form-control" required/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Category</label>
                                    <div class="col-sm-4">
                                        <select class="select2" data-placeholder="Choose One" required>
                                            <option value=""></option>
                                            <option value="3d">3D Animation</option>
                                            <option value="web">Web Design</option>
                                            <option value="software">Software Engineering</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div class="tab-pane" id="vtab3">
                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Card No</label>
                                    <div class="col-sm-8">
                                        <input type="text" name="cardno" class="form-control"/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-4 control-label">Expiration</label>
                                    <div class="col-sm-4">
                                        <select class="select2" data-placeholder="Month">
                                            <option value=""></option>
                                            <option value="">January</option>
                                            <option value="">February</option>
                                            <option value="">March</option>
                                            <option value="">...</option>
                                        </select>
                                    </div>

                                    <div class="col-sm-4">
                                        <select class="select2" data-placeholder="Year">
                                            <option value=""></option>
                                            <option value="">2013</option>
                                            <option value="">2014</option>
                                            <option value="">2015</option>
                                            <option value="">...</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="form-group">
                                    <label class="col-sm-4 control-label">CSV</label>
                                    <div class="col-sm-4">
                                        <input type="text" name="csv" class="form-control"/>
                                    </div>
                                </div>

                            </div>


                        </div><!-- tab-content -->
                    </form>

                    <ul class="pager wizard">
                        <li class="previous"><a href="javascript:void(0)">Previous</a></li>
                        <li class="next"><a href="javascript:void(0)">Next</a></li>
                    </ul>

                </div><!-- #validationWizard -->

            </div><!-- panel-body -->
        </div><!-- panel -->
    </div>
</div>


<script src="/assets/js/bootstrap-wizard.min.js"></script>

<script>
    jQuery(document).ready(function () {

        "use strict";
        // With Form Validation Wizard
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
            onTabClick: function (tab, navigation, index) {
                return false;
            },
            onNext: function (tab, navigation, index) {
                var $valid = jQuery('#firstForm').valid();
                if (!$valid) {

                    $validator.focusInvalid();
                    return false;
                }
            }
        });

        jQuery(".select2").select2({
            width: '100%',
            minimumResultsForSearch: -1
        });


    });
</script>