Home = React.createClass({
    displayName : 'Home',
    clickRegister(e){
        e.preventDefault();
        console.log(e);
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
                {studystudents}
                {chancestudy}
                {giftstudy}
                {talking}
                {pagebottom}
            </div>
            <ModalDialog/>
            <GoogleTag type="remarketing" id="1017172282"/>
        </div>
    )
}
});

Navbar = React.createClass({
    displayName : 'Navbar',
    render(){
        return <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
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
                        <li role="navigation"><a href="#" data-target="du-hoc-sinh">Du học sinh</a></li>
                        <li role="navigation"><a href="#" data-target="co-hoi-tai-trien-lam">Cơ hội triển lãm</a></li>
                        <li role="navigation"><a href="#" data-target="qua-tang">Quà tặng</a></li>
                        <li role="navigation"><a href="#" data-target="dien-gia-tai-trien-lam">Diễn giả tại triển lãm</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
});

ButtonRegister = React.createClass({
    displayName : 'Button',
    render(){
        return <button className="btn btn-register" data-toggle="modal" data-target="#dlg">Đăng ký ngay</button>
    }
})

TopPage = React.createClass({
    displayName : 'TopPage',
    render(){
        return (
            <div id="top-page">
                <div className="container text-center">
                    <h1 className="top-header">Triển lãm thế giới du học</h1>
                    <h2 className="top-subheader">Cơ hội trong tầm tay</h2>
                </div>
            </div>
        )
    }
});

HeroPage = React.createClass({
    displayName : 'HeroPage',
    render(){
        return (
            <div id="heropage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <img src="/images/hero-page-logo.png" alt="Tư vấn du học" className="img-responsive img-center"/>
                        </div>
                        <div className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-xs-12">
                            <p>
                                Tham gia triển lãm THẾ GIỚI DU HỌC để được gặp gỡ các đại diện tuyển sinh của 70 trường Trung học, Đại học từ Anh, Úc, Mỹ, Canada, Hà Lan, Thuỵ Sỹ tìm hiểu cơ hội học bổng, làm việc, định cư và 100% nhận các phần quà hấp dẫn
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
                                17h - 20h Thứ 4, ngày 30/09 tại Trung tâm Star Galaxy 87 Láng Hạ, cạnh rạp chiếu phim Quốc Gia
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
    displayName : 'StudyStudents',
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
                                <p>“Theo mình, “Du Học” là một chuyến đi mà bạn sẽ được trang bị kiến thức, gặp gỡ người mới để mở mang tầm mắt. Nó còn là cơ hội để bạn trải nghiệm cuộc sống tự lập, học hỏi nhiều điều mới và thử thách khả năng của bản thân”.</p>
                            </div>
                            <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-xs-12">
                                <img src="/images/dieu linh.png" alt="Đặng Diệu Linh" className="img-responsive img-center"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-xs-12">
                                <img src="/images/thao dan.png" alt="Thảo Đan" className="img-responsive img-center"/>
                            </div>
                            <div className="col-lg-9 col-lg-offset-1 col-md-9 col-md-offset-1 col-xs-12">
                                <h1>Vũ Thảo Đan - Du học sinh của Sunrise Vietnam tại Anh</h1>
                                <p className="vtd">Trước khi đi du học, em cũng có nhiều điều bỡ ngỡ trong việc làm thủ tục, tuy nhiên rất may mắn vì được các anh chị và nhất là cô Hương ở trung tâm Sunrise hướng dẫn chu đáo nên em và bố mẹ cũng cảm thấy yên tâm hơn.Trong suốt 2 năm vừa qua, bố mẹ em cũng nắm bắt rõ tình hình học tập sinh hoạt của em qua các báo cáo nhận xét mỗi kì của trường gửi về qua trung tâm.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

ChanceStudy = React.createClass({
    displayName : 'ChanceStudy',
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
    displayName : 'GiftStudy',
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
                            <img src="/images/qua 1.png" alt="Vé xem phim CGV" className="img-responsive img-gift img-center"/>
                            <p className="text-center">Vé xem phim CGV</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sx-6">
                            <img src="/images/cam nang du hoc.png" alt="Sổ, bút, cẩm nang du học" className="img-responsive img-gift img-center"/>
                            <p className="text-center">Sổ, bút, cẩm nang du học</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sx-6">
                            <img src="/images/qua 2.png" alt="Vé máy bay 1 chiều" className="img-responsive img-gift img-center"/>
                            <p className="text-center">Vé máy bay 1 chiều</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sx-6">
                            <img src="/images/qua 3.png" alt="Bốc thăm tặng lệ phí thi IELTS, TOEFL" className="img-responsive img-gift img-center"/>
                            <p className="text-center">Bốc thăm tặng lệ phí thi IELTS, TOEFL</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

Talking = React.createClass({
    displayName : 'Talking',
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
                                <img src="/images/Daniel.png" alt="Daniel Walwyn" className="img-responsive img-talking img-center"/>
                                <p className="text-center talking">Daniel Walwyn</p>
                                <p className="text-center talking-info">Giảng viên IELTS tại <br/> SUNRISE VIETNAM</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sx-4">
                                <img src="/images/nguyen bich ngoc.png" alt="Phạm Bích Ngọc" className="img-responsive img-talking img-center"/>
                                <p className="text-center talking">Phạm Bích Ngọc</p>
                                <p className="text-center talking-info">Học viên xuất sắc IELTS 8.0</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sx-4">
                                <img src="/images/minh phan.png" alt="Minh Phan" className="img-responsive img-talking img-center"/>
                                <p className="text-center talking">Minh Phan</p>
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
})

PageBottom = React.createClass({
    displayName : 'PageButton',
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
    displayName : 'Modal',
    render(){
        return (
            <div className="modal fade" ref="dlg" id="dlg">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Đăng ký thông tin</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})