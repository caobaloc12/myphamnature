import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Row, Col, Button } from 'antd';

import Nav from '../Home/Nav';
import Footer from '../Home/Footer';
import './about.less';
import aboutImg1 from '../../assets/about_img1.png';
import aboutImg2 from '../../assets/about_img2.jpg';
import Cart from '../Cart';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
          };
    }

    componentDidMount() {
        document.title = "Giới thiệu về I'm Nature";
        enquireScreen((b) => {
          this.setState({ isMobile: !!b });
        });
        if (location.port) {
          setTimeout(() => {
            this.setState({
              show: true,
            });
          }, 500);
        } 

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '115517331888071',
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.5' // use version 2.1
            });
        }.bind(this);

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidUpdate() {
        FB.XFBML.parse();
    }

    render() {
        return (
            <div className="templates-wrapper">
                <Cart />
                <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile} />
                <div className="about-wrapper">
                    <Row>
                        <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }}>
                            <h2>Về Công ty I’m Nature</h2>
                            <p><b>Thương hiệu mỹ phẩm thiên nhiên I’m nature</b></p>
                            <p>Xã hội ngày càng phát triển nên ý thức chăm sóc sức khỏe và sắc đẹp ngày càng được quan tâm hơn. Nhất là sức khỏe của bản thân và trẻ sơ sinh được các mẹ rất chú trọng. Nhu cầu sử dụng các sản phẩm có nguồn gốc thiên nhiên, tuyệt đối an toàn với sức khỏe mẹ và bé ngày càng lớn. Nhận thức được điều này nhằm chia sẻ tạo điều kiện đưa những sản phẩm tốt, an toàn đến tay người tiêu dùng thương hiệu “I’m Nature" – chuyên cung cấp phân phối sản phẩm làm đẹp, chăm sóc sức khỏe có nguồn gốc thiên nhiên được ra đời.</p>
                            <img src={aboutImg1} alt="My pham I'm Nature"/>
                            <p>Thấu hiểu những băn khoăn của các mẹ trong thời kỳ đặc biệt I’m Nature thấu hiểu được những nỗi trăn trở của các mẹ trong những thời kỳ đặc biệt này. Bất kể trong thời kỳ mang thai hay sau sinh việc sử dụng sản phẩm cho mẹ và bé rất quan trọng.</p>
                            <p>Trên thị trường có rất nhiều hàng hóa có xuất xứ khác nhau nên độ đảm bảo chất lượng không được đảm bảo. Nếu sử dụng hàng hóa kém chất lượng sẽ có rất nhiều ảnh hưởng có hại cho mẹ và bé (nhất là trẻ sơ sinh do hệ thống miễn dịch của các bé chưa hoàn thiện nên còn rất yếu). Vì vậy việc chọn sản phẩm sử dụng cho mẹ và bé trong những thời kỳ này cần được sàng lọc kỹ lưỡng để tránh xảy ra những hậu quả không mong muốn.</p>
                            <p>Nhận thấy sự đa dạng của các thảo dược thiên nhiên tại Việt Nam qua sách báo và qua kinh nghiệm của các bà các mẹ đi trước. Các chuyên gia của Im nature đã bắt tay vào nghiên cứu để đưa ra các sản phẩm chăm sóc sức khỏe, sắc đẹp đảm bảo hoàn toàn có nguồn gốc từ thiên nhiên, tuyệt đối an toàn cho sức khỏe và môi trường. Điều này làm nên sự tròn nghĩa của “I’m Nature”.</p>
                            <p><b>Sản phẩm có nguồn gốc 100% từ thiên nhiên, đảm bảo an toàn</b></p>
                            <p>Trên thực tế, sản phẩm mới ra mắt không lâu nhưng được rất nhiều chị em phụ nữ tin dùng và đánh giá cao. Vì là sản phẩm có nguồn gốc tự nhiên nên hiệu quả cần phải kiên trì mới có thể thấy rõ rệt.    Tuy thế nhưng sản phẩm đảm bảo hiệu quả tốt và tuyệt đối an toàn cho sức khỏe người sử dụng nên vẫn được người dùng đánh giá cao.</p>
                            <img src={aboutImg2} alt="My pham I'm Nature" />
                            <p><b>Các sản phẩm I’m Nature: </b></p>
                            <ul>
                                <li>Sữa rửa mặt</li>
                                <li>Dung dịch vệ sinh phụ nữ</li>
                                <li>Sữa tắm trẻ em</li>
                                <li>Sản phẩm chăm sóc tóc: dầu gội thảo mộc Argan , dầu xả thảo mộc Argan, tinh chất thảo mộc Argan</li>
                                <li>Muối thảo dược ngâm chân</li>
                                <li>Mặt nạ thải độc Nano Mask</li>
                                <li>...</li>
                            </ul>
                            <p><b>Thành phần các sản phẩm I’m Nature: </b></p>
                            <p>Tất cả các sản phẩm đều được hoàn thiện từ các thảo dược quý, an toàn tuyệt đối như:</p>
                            <ul>
                                <li>Cúc La Mã, tảo biển Nhật Bản (sữa rửa mặt)</li>
                                <li>Trầu không, Kacip Fatimah Malaysia (dung dịch vệ sinh phụ nữ)</li>
                                <li>Tràm trầu, tràm gió, mật ong, bạc hà, hương thảo (sữa tắm trẻ em)</li>
                                <li>Huyết giác, đinh hương, nhục quế, địa liền, gừng, nghệ, đinh lăng, ngải cứu… (thảo mộc ngâm chân)</li>
                                <li>Tinh dầu Argan, tinh dầu bưởi, bồ kết, tinh dầu cam ngọt, hương nhu (sản phẩm chăm sóc tóc)</li>                            
                            </ul>
                            <p>Chỉ ra mắt một thời gian ngắn nhưng I’m Nature đã được hàng chục ngàn khách hàng trên cả nước yêu thích, 
                                rất nhiều nhà phân phối trên toàn quốc tin tưởng. Chính cái tâm trong việc tạo nên chất lượng của sản 
                                phẩm giúp thương hiệu của I’m nature đứng vững trong mắt người tiêu dùng.</p>
                            <p>Liên hệ ngay với chúng tôi để được tư vấn về sản phẩm mà bạn quan tâm</p>
                            <a href="#/lien-he" target="_blank" className="contactBtn" >Liên hệ ngay!</a>

                            <div>
                                <div className="fb-comments" data-href="https://www.facebook.com/cna.net.au/" data-numposts="10" width="100%"></div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>
            </div>
        );
    }
}

export default About;