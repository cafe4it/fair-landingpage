Home = React.createClass({
    displayName: 'Home',
    componentDidMount(){
        var context = FlowRouter.current();
        if (context.route && context.route.name) {
            analytics.page(context.route.name);
        } else {
            analytics.page(context.path);
        }
    },
    render(){
        var navbar = <Navbar/>,
            toppage = <TopPage/>,
            heropage = <HeroPage/>,
            studystudents = <StudyStudents/>,
            chancestudy = <ChanceStudy/>,
            giftstudy = <GiftStudy/>,
            talking = <Talking/>,
            pagebottom = <PageBottom/>
        return (
            <div className="container-fluid">
                <div className="row">
                    {navbar}
                    {toppage}
                    {heropage}
                    {chancestudy}
                    {giftstudy}
                    {talking}
                    {studystudents}
                    {pagebottom}
                </div>
                <div className="scroll-page">
                    <a href="#" data-toggle="modal" data-target="#dlg"></a>
                </div>
                <ModalDialog/>
                <GoogleTag type="remarketing" id="1017172282"/>
                <FacebookTag type="remarketing" id="782977391770286"/>

                <GoogleTag type="remarketing" id="957099916"/>
                <FacebookTag type="remarketing" id="546144518867566"/>
            </div>
        )
    }
});

Navbar = React.createClass({
    displayName: 'Navbar',
    render(){
        return <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src="/images/logo.png" alt="SUNRISE VIETNAM"/>
                    </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li role="navigation"><a href="#" data-target="top-page">Trang chủ</a></li>
                        <li className="divider-vertical"></li>
                        <li role="navigation"><a href="#" data-target="du-hoc-sinh">Du học sinh</a></li>
                        <li className="divider-vertical"></li>
                        <li role="navigation"><a href="#" data-target="co-hoi-tai-trien-lam">Cơ hội triển lãm</a></li>
                        <li className="divider-vertical"></li>
                        <li role="navigation"><a href="#" data-target="qua-tang">Quà tặng</a></li>
                        <li className="divider-vertical"></li>
                        <li role="navigation"><a href="#" data-target="dien-gia-tai-trien-lam">Diễn giả tại triển
                            lãm</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
});

ButtonRegister = React.createClass({
    displayName: 'Button',
    render(){
        var _class = (this.props.class) ? this.props.class : 'btn btn-register';
        return <button className={_class} data-toggle="modal" data-target="#dlg">Đăng ký ngay</button>
    }
});


TopPage = React.createClass({
    displayName: 'TopPage',
    render(){
        return (
            <div id="top-page">
                <div className="container text-center">
                    <h1 className="top-header">Triển lãm thế giới du học</h1>

                    <h2 className="top-subheader">Cơ hội du học trong tầm tay</h2>
                </div>
            </div>
        )
    }
});

HeroPage = React.createClass({
    displayName: 'HeroPage',
    render(){
        return (
            <div id="heropage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <img src="/images/hero-page-logo.png" alt="Tư vấn du học"
                                 className="img-responsive img-center"/>
                        </div>
                        <div className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-xs-12">
                            <p>
                                Tham gia triển lãm THẾ GIỚI DU HỌC để được gặp gỡ các đại diện tuyển sinh của 70 trường
                                Trung học, Đại học từ Anh, Úc, Mỹ, Canada, Hà Lan, Thuỵ Sỹ tìm hiểu cơ hội học bổng, làm
                                việc, định cư và 100% nhận các phần quà hấp dẫn
                                <br/>
                                    <span className="city">
                                        * Hải phòng
                                    </span>
                                <br/>
                                9h - 12h Chủ nhật, ngày 27/09 tại Nhà hát lớn Hải Phòng
                                <br/>
                                    <span className="city">
                                        * Hà Nội
                                    </span>
                                <br/>
                                17h - 20h Thứ 4, ngày 30/09 tại Trung tâm Star Galaxy 87 Láng Hạ, cạnh rạp chiếu phim
                                Quốc Gia
                                <br/>
                                    <span className="city">
                                        * Tp Hồ Chí Minh
                                    </span>
                                <br/>
                                9h - 12 Chủ nhật, ngày 04/10 tại khách sạn Liberty Central Saigon, 59-61 Pastuer Quận 1
                            </p>

                            <p>
                                <ButtonRegister/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

StudyStudents = React.createClass({
    displayName: 'StudyStudents',
    render(){
        return (
            <div id="du-hoc-sinh">
                <div className="studystudent-header">
                    <div className="container text-center">
                        <h1>Du học sinh của Sunrise Vietnam</h1>
                    </div>
                </div>
                <div className="studystutents-feeling">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-md-offset-1 col-lg-offset-1 col-sx-12">
                                <h1>Đặng Diệu Linh - Du học sinh của Sunrise Vietnam tại Anh</h1>

                                <p>“Theo mình, “Du Học” là một chuyến đi mà bạn sẽ được trang bị kiến thức, gặp gỡ người
                                    mới để mở mang tầm mắt. Nó còn là cơ hội để bạn trải nghiệm cuộc sống tự lập, học
                                    hỏi nhiều điều mới và thử thách khả năng của bản thân”.</p>
                            </div>
                            <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-xs-12">
                                <img src="/images/dieu linh.png" alt="Đặng Diệu Linh"
                                     className="img-responsive img-center"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-xs-12">
                                <img src="/images/thao dan.png" alt="Thảo Đan" className="img-responsive img-center"/>
                            </div>
                            <div className="col-lg-9 col-lg-offset-1 col-md-9 col-md-offset-1 col-xs-12">
                                <h1>Vũ Thảo Đan - Du học sinh của Sunrise Vietnam tại Anh</h1>

                                <p className="vtd">Trước khi đi du học, em cũng có nhiều điều bỡ ngỡ trong việc làm thủ
                                    tục, tuy nhiên rất may mắn vì được các anh chị và nhất là cô Hương ở trung tâm
                                    Sunrise hướng dẫn chu đáo nên em và bố mẹ cũng cảm thấy yên tâm hơn.Trong suốt 2 năm
                                    vừa qua, bố mẹ em cũng nắm bắt rõ tình hình học tập sinh hoạt của em qua các báo cáo
                                    nhận xét mỗi kì của trường gửi về qua trung tâm.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-xs-12">
                                <div className="text-center">
                                    <ButtonRegister/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

ChanceStudy = React.createClass({
    displayName: 'ChanceStudy',
    render(){
        return (
            <div id="co-hoi-tai-trien-lam">
                <div className="container">
                    <h1 className="text-center">Cơ hội tại triển lãm</h1>

                    <p className="text-center">GẶP GỠ ĐẠI DIỆN TUYỂN SINH : Xét hồ sơ Du học, tư vấn VIP từ A đến Z</p>

                    <p className="text-center">HỘI THẢO CHUYÊN ĐỀ: Chia sẻ của du học sinh, Tips luyện IELTS, TOEFL</p>

                    <p className="text-center">HỌC BỔNG DU HỌC &amp; THI THỬ IELTS, TOEFL</p>
                </div>
            </div>
        )
    }
});

GiftStudy = React.createClass({
    displayName: 'GiftStudy',
    render(){
        return (
            <div id="qua-tang">
                <div className="p1">
                    <div className="container text-center">
                        <h1>100% tham dự nhận ngay</h1>
                    </div>
                </div>
                <div className="p2 container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sx-6">
                            <img src="/images/qua 1.png" alt="Vé xem phim CGV"
                                 className="img-responsive img-gift img-center"/>

                            <p className="text-center">Vé xem phim CGV</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sx-6">
                            <img src="/images/cam nang du hoc.png" alt="Sổ, bút, cẩm nang du học"
                                 className="img-responsive img-gift img-center"/>

                            <p className="text-center">Sổ, bút, cẩm nang du học</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sx-6">
                            <img src="/images/qua 2.png" alt="Vé máy bay 1 chiều"
                                 className="img-responsive img-gift img-center"/>

                            <p className="text-center">Vé máy bay 1 chiều</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sx-6">
                            <img src="/images/qua 3.png" alt="Bốc thăm tặng lệ phí thi IELTS, TOEFL"
                                 className="img-responsive img-gift img-center"/>

                            <p className="text-center">Bốc thăm tặng lệ phí thi IELTS, TOEFL</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

Talking = React.createClass({
    displayName: 'Talking',
    render(){
        return (
            <div id="dien-gia-tai-trien-lam">
                <div className="p1">
                    <div className="container text-center">
                        <h1>Diễn giả tại triển lãm</h1>
                    </div>
                </div>
                <div className="p2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sx-4">
                                <img src="/images/Daniel.png" alt="Daniel Walwyn"
                                     className="img-responsive img-talking img-center"/>

                                <p className="text-center talking">Daniel Walwyn</p>

                                <p className="text-center talking-info">Giảng viên IELTS tại <br/> SUNRISE VIETNAM</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sx-4">
                                <img src="/images/nguyen bich ngoc.png" alt="Phạm Bích Ngọc"
                                     className="img-responsive img-talking img-center"/>

                                <p className="text-center talking">Phạm Bích Ngọc</p>

                                <p className="text-center talking-info">Học viên xuất sắc IELTS 8.0</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sx-4">
                                <img src="/images/minh phan.png" alt="Minh Phan"
                                     className="img-responsive img-talking img-center"/>

                                <p className="text-center talking">Minh Phan</p>

                                <p className="text-center talking-info">Giảng viên luyện thi TOEFL iBT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

PageBottom = React.createClass({
    displayName: 'PageButton',
    render(){
        return (
            <div id="page-bottom">
                <div className="container text-center">
                    <h1>Chúng tôi chờ đón bạn tại triển lãm</h1>
                    <img src="/images/logo-schools.png" alt="Logo Schools" className="img-responsive img-center"/>

                    <p><ButtonRegister/></p>
                </div>
            </div>
        )
    }
})

ModalDialog = React.createClass({
    displayName: 'Modal',
    getInitialState: function () {
        return {buttonLabel: 'Đăng ký', selectedCountries: [], selectedKnows: []}
    },
    componentWillMount: function () {
        /*$('.form-control').each(function(){
         $(this).val('');
         });

         $('.slt-multi').multiselect('deselectAll', true);*/
    },
    componentDidMount: function () {
        var self = this;
        $('#sltCountry').multiselect({
            numberDisplayed: 1,
            inheritClass: true,
            nonSelectedText: 'Đất nước bạn dự định du học',
            onChange: function (e) {
                var brands = $('#sltCountry option:selected'),
                    selected = [];
                $(brands).each(function (index, brand) {
                    selected.push($(this).val());
                });

                self.setState({selectedCountries: selected});
            }
        });

        $('#sltKnowMe').multiselect({
            numberDisplayed: 1,
            inheritClass: true,
            nonSelectedText: 'Bạn biết Sunrise Vietnam qua',
            onChange: function (e) {
                var brands = $('#sltKnowMe option:selected'),
                    selected = [];
                $(brands).each(function (index, brand) {
                    selected.push($(this).val());
                });

                self.setState({selectedKnows: selected});
            }
        });
        $('#myForm').validator({
            disable: true
        }).on('submit', function (e) {
            if (e.isDefaultPrevented()) {
                self.setState({buttonLabel: 'Đăng ký'});
            } else {
                var obj = {
                    Hovaten: React.findDOMNode(self.refs.txtFullName).value,
                    Sodienthoai: React.findDOMNode(self.refs.txtPhone).value,
                    Email: React.findDOMNode(self.refs.txtEmail).value,
                    Thamdutai: React.findDOMNode(self.refs.sltLocation).value,
                    Nguoidangkyla: React.findDOMNode(self.refs.sltObject).value,
                    Thoigiandudinh: React.findDOMNode(self.refs.sltYears).value,
                    Dudinhduhoctai: self.state.selectedCountries,
                    BietSrvnqua: self.state.selectedKnows
                }
                if (obj.BietSrvnqua.length > 0 && obj.Dudinhduhoctai.length > 0) {
                    self.setState({buttonLabel: 'Xin đợi...'});
                    Meteor.call('registerFair', obj, function (err, rs) {
                        if (err) console.error(err);
                        if (rs) {
                            Meteor.cookie.set('fair_registered', true);
                            Session.set('done_register', true);
                            analytics.identify(rs,{
                                name : obj.Hovaten,
                                fullname : obj.Hovaten,
                                email : obj.Email,
                                phone : obj.Sodienthoai
                            });
                            analytics.track('Submitted Form');
                            $('button[class="close"]').click();
                        }
                    })
                }
                return false;
            }
        });

        $('#dlg').on('shown.bs.modal', function(){
            analytics.track('Open Form');
        })

        $('#dlg').on('hidden.bs.modal', function () {
            $('#myForm').validator('destroy');
            $('.form-control').each(function () {
                $(this).val('');
            });
            $('.slt-multi').multiselect('deselectAll', true);
            self.setState({selectedCountries: [], selectedKnows: []});
            if(Session.get('done_register') === false){
                analytics.track('Close, not submit form');
            }
        })
    },
    render(){
        return (
            <div className="modal fade" ref="dlg" id="dlg" role="dialog">
                <div className="modal-dialog" role="document">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Đăng ký tham dự triển lãm</h4>
                        </div>
                        <div className="modal-body">
                            <form role="form" id="myForm">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="txtFullName" ref="txtFullName" name="name"
                                                       data-minlength="5" className="form-control"
                                                       placeholder="Họ và tên" required
                                                       data-error="Xin nhập đầy đủ Họ và Tên"/>

                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="txtPhone" ref="txtPhone" name="phone"
                                                       className="form-control" placeholder="Số điện thoại" required
                                                       data-error="Xin nhập số điện thoại"/>

                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" id="txtEmail" ref="txtEmail" name="email"
                                                       className="form-control" placeholder="Địa chỉ Email" required
                                                       data-error="Xin nhập địa chỉ Email"/>

                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <select id="sltLocation" ref="sltLocation" className="form-control"
                                                        required data-error="Xin bạn chọn 1 giá trị">
                                                    <option value="" disabled="" defaultValue>Bạn sẽ tham dự triển lãm
                                                        tại
                                                    </option>
                                                    <option value="Hà Nội">HN - Trung tâm Star Galaxy 17:00 - 20:00 NGÀY
                                                        30/09/2015, 87 Láng Hạ
                                                    </option>
                                                    <option value="Hải Phòng">HP - Nhà hát lớn Hải Phòng 9:00 - 12:00
                                                        NGÀY 27/09/2015
                                                    </option>
                                                    <option value="Tp.Hồ Chí Minh">HCM - KS Liberty Central Saigon 9:00
                                                        - 12:00 NGÀY 04/10/2015 , 59-61 Pastuer Quận 1
                                                    </option>
                                                </select>

                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <select id="sltObject" ref="sltObject" className="form-control" required
                                                        data-error="Xin bạn chọn 1 giá trị">
                                                    <option value="" disabled="" defaultValue>Bạn là</option>
                                                    <option value="Học sinh THCS">Học sinh THCS</option>
                                                    <option value="Học sinh THPT">Học sinh THPT</option>
                                                    <option value="Sinh viên">Sinh viên</option>
                                                    <option value="Đang đi làm">Đang đi làm</option>
                                                    <option value="Phụ huynh">Phụ huynh</option>
                                                    <option value="Khác">Khác</option>
                                                </select>

                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control" id="sltYears" ref="sltYears" required
                                                        data-error="Xin bạn chọn 1 giá trị">
                                                    <option value="" disabled="" defaultValue>Thời gian dự định du học
                                                    </option>
                                                    <option value="2015">2015</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="Khác">Khác</option>
                                                </select>

                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control slt-multi" id="sltCountry"
                                                        ref="sltCountry" multiple="multiple" required
                                                        data-error="Xin bạn chọn ít nhất 1 giá trị">
                                                    <option value="Anh">Anh</option>
                                                    <option value="Mỹ">Mỹ</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Đức">Đức</option>
                                                    <option value="Phần Lan">Phần Lan</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Thái Lan">Thái Lan</option>
                                                    <option value="Thuỵ Sỹ">Thuỵ Sỹ</option>
                                                    <option value="Hà Lan">Hà Lan</option>
                                                    <option value="Newzealand">New Zealand</option>
                                                    <option value="Ý">Ý</option>
                                                    <option value="Hàn Quốc">Hàn Quốc</option>
                                                    <option value="Nhật bản">Nhật bản</option>
                                                    <option value="Trung Quốc">Trung quốc</option>
                                                    <option value="Khác">Khác</option>
                                                </select>

                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control slt-multi" id="sltKnowMe"
                                                        ref="sltKnowMe" multiple="multiple" required
                                                        data-error="Xin bạn chọn ít nhất 1 giá trị">
                                                    <option value="Facebook SunriseVietnam">Facebook SunriseVietnam
                                                    </option>
                                                    <option value="Website SunriseVietnam">Website SunriseVietnam
                                                    </option>
                                                    <option value="Google">Google</option>
                                                    <option value="Băng rôn">Băng rôn</option>
                                                    <option value="Bạn bè giới thiệu">Bạn bè giới thiệu</option>
                                                    <option value="Dân trí">Dân trí</option>
                                                    <option value="Vnexpress">Vnexpress</option>
                                                    <option value="Khác">Khác</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="pull-right">
                                                <button type="submit"
                                                        className="btn btn-primary">{this.state.buttonLabel}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
})