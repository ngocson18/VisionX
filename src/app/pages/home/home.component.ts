import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    RouterLink,
    NzCollapseModule,
    FormsModule,
    CommonModule
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  panels = [
    {
      active: false,
      name: 'Website đám cưới là gì?',
      disabled: false,
      content: 'Website đám cưới là một website dành cho cặp đôi để lưu giữ và chia sẻ khoảnh khắc ngọt ngào nhất của cuộc đời. Ở đó thể hiện được tất cả những thông tin cần thiết cho một đám cưới bao gồm thông tin về tiệc cưới, cô dâu chú rể, câu chuyện tình yêu, album ảnh cưới và cho phép mọi người gửi lời chúc mừng một cách dễ dàng. Giúp cung cấp tức thời mọi kế hoạch chuẩn bị đám cưới của bạn cho bạn bè và người thân một cách đặc biệt. Và cũng là một cách để lưu giữ Album hình cưới một cách độc đáo, dễ dàng chia sẻ cho tất cả mọi người.'
    },
    {
      active: false,
      disabled: false,
      name: 'Khi nào nên tạo website đám cưới?',
      content: 'Website đám cưới được tạo sớm sẽ giúp quá trình chuẩn bị chu toàn hơn. Trước khi chia sẻ thông tin với khách mời, bạn nên cập nhật thông tin trên website đầy đủ để khách mời có thể chủ động sắp xếp thời gian cũng như giúp họ ghi nhớ về ngày đám cưới diễn ra. Nếu sự kiện đám cưới của bạn đã diễn ra, bạn cũng hoàn toàn có thể tạo một website đám cưới để lưu giữ thông tin, kỷ niệm về ngày trọng đại.'
    },
    {
      active: false,
      disabled: false,
      name: 'Ý nghĩa của việc tạo website đám cưới là gì?',
      content: 'Thay cho lời mời trên giấy thông thường, một website đám cưới sẽ giúp bạn cung cấp đầy đủ thông tin và thông báo cho khách mời về ngày trọng đại của mình. Ngoài thông tin về lễ cưới, trang web của bạn cũng nên tạo sự hứng thú cho khách mời khi tích hợp nhiều chức năng khác nhau: xem album ảnh cưới hay gửi gắm những lời chúc thân thương,... Đặc biệt nó làm cho đám cưới của bạn trở nên độc đáo, và lưu giữ sự kiện trọng đại của bạn mãi theo thời gian.'
    },
    {
      active: false,
      disabled: false,
      name: 'Đặt tên miền website đám cưới như thế nào cho đúng?',
      content: 'Bạn có thể đặt tên cho website đám cưới theo bất cứ cách nào tùy ý. Tuy nhiên, tên website là ấn tượng đầu tiên đối với người xem vì vậy hãy ưu tiên chọn những cái tên có ý nghĩa thân thuộc. Hầu hết mọi người thường đặt tên bằng sự kết hợp giữa tên của vợ và chồng. Một số khác đan xen những từ có ý nghĩa với tên của họ hoặc ký tự đặc biệt nào đấy. Đặc biệt, bạn có thể đăng ký tên miền riêng cho website của bạn.'
    }
  ];
  inputForm = {
    name: '',
    email: '',
    message: ''
  }

  constructor(
  ) { }

  ngOnInit() {
  }

  login() {

  }

}
