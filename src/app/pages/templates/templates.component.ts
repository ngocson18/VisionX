import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule, NzButtonSize} from "ng-zorro-antd/button";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    RouterLink,
    NzIconModule,
    NzButtonModule,
    CommonModule
  ],
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  size: NzButtonSize = 'large';

  public listTemplate: any = [
    {
      name: 'SlideFlex',
      description: 'Giao diện template tuyệt vời cho trang web của bạn với hiệu ứng trình diễn linh hoạt, mượt mà và đa dạng, tạo nên trải nghiệm đẹp mắt và chuyên nghiệp.',
      isVIP: true,
      image: 'assets/images/3ad4155849440500a799142a840aecb2.jpeg',
    },
    {
      name: 'Elite VIP',
      description: 'Cho phép tuỳ biến Tone màu, Elite VIP mang đến trải nghiệm đẳng cấp và độc đáo dành cho những người đặc biệt.',
      isVIP: true,
      image: 'assets/images/a3088289c7cfe787f4250d369eb61220.jpeg',
    },
    {
      name: 'Cloudy',
      description: 'Giao diện website với phong cách thiết kế độc đáo, mang đến cảm giác tươi mới, nhẹ nhàng, thân thiện và trẻ trung.',
      isVIP: false,
      image: 'assets/images/8ca56b72e5007f46187ae8787f8064fb.jpeg',
    },
    {
      name: 'Blue Horizon',
      description: 'Giao diện tươi sáng và tinh tế, mang đến không gian rộng lớn và hòa quyện với tông màu xanh dịu nhẹ, tạo cảm giác thoải mái và gợi nhớ đến vẻ đẹp của bầu trời xanh rực sáng.',
      isVIP: false,
      image: 'assets/images/f0e66172e2021ceabec2df06f73dc881.jpeg',
    },
    {
      name: 'Gentle',
      description: 'Chủ đề hướng đến sự nhẹ nhàng, trong sáng nhưng cũng rất tinh tế và có nét đặc sắc riêng. Phù hợp với những cặp đôi thích sự dịu dàng và tươi sáng.',
      isVIP: false,
      image: 'assets/images/ad915f5243789c98137ac63ffd303dac.jpeg',
    },
    {
      name: 'Carrot Craze',
      description: 'Mẫu giao diện với tone màu cam tươi sáng, sẵn sàng mang đến cho website của bạn sự tươi mới và nổi bật.',
      isVIP: false,
      image: 'assets/images/4c3edcd6b2e85b0acbb80fdada0c46a8.jpeg',
    },
    {
      name: 'Brownleaf',
      description: 'Giao diện đầy tinh tế và thân thiện, một nơi tràn ngập sự ấm áp và gần gũi như những chiếc lá rụng mùa thu.',
      isVIP: false,
      image: 'assets/images/b000f7ed06d2c2c28239869feb53bed0.jpeg',
    },
    {
      name: 'Blue Glide',
      description: 'Một giao diện web mang đến sự nhẹ nhàng, tinh tế với tông màu xanh dịu dàng. Thiết kế tối giản giúp tập trung vào nội dung và trải nghiệm người dùng.',
      isVIP: false,
      image: 'assets/images/86a7dffdf6c64d436c0ae8cebb196bd4.jpeg',
    },
    {
      name: 'Hello Kitty',
      description: 'Giao diện web phong cách màu hồng đáng yêu của Hello Kitty, tối ưu thiết bị di động. Dành cho những ai yêu thích phong cách đáng yêu và nữ tính này.',
      isVIP: false,
      image: 'assets/images/9968c3ed1eeeb661d603b26993ae4c9d.jpeg',
    },
    {
      name: 'Modern',
      description: 'Chủ đề hướng đến sự trẻ trung, tươi mới và tràn đầy năng lượng của tuổi trẻ. Mang đến cảm giác phóng khoáng và tự do.',
      isVIP: false,
      image: 'assets/images/a849fc7b51570bb499430e26ccf1cba2.jpeg',
    },
    {
      name: 'Minimalism',
      description: 'Yêu những điều giản dị và thuần khiết. Bắt trọn hạnh phúc trong từng khoảnh khắc. Chủ nghĩa tối giản lấy màu trắng là màu chủ đạo và sắc xanh tạo điểm nhấn.',
      isVIP: false,
      image: 'assets/images/c4e731c797096dd6c7a7865b0b115242.jpeg',
    },
    {
      name: 'Hold my hand',
      description: 'Nắm tay anh thật chặt, giữ tay anh thật lâu...Tình yêu bắt đầu từ những sự tình cờ và sau đó là cái nắm tay ấm áp, dịu dàng từ anh. ',
      isVIP: false,
      image: 'assets/images/40809cdff441dadc0f03c3b0a78f2bdc.jpeg',
    },
    {
      name: 'Pieceful',
      description: 'Tô bình yên - Vẽ hạnh phúc. Chủ đề mang hơi hướng tự nhiên và gần gũi. Cảm giác thân mật giản dị chan hòa cùng thiên nhiên, trong lành và tinh khôi. ',
      isVIP: false,
      image: 'assets/images/647d363e55cf583c70e15c79d5f33f53.jpeg',
    },
    {
      name: 'Romantic',
      description: 'Một đám cưới yêu kiều, đầy thơ mộng như trong những câu chuyện cổ tích. Thiết kế tinh tế, dịu dàng, tao nhã, rất lãng mạn mà vẫn đầy tươi mới.',
      isVIP: false,
      image: 'assets/images/71c344af036a5b92bf86f9b58799a7be.jpeg',
    },
    {
      name: 'Retro and Vintage',
      description: '“Tình như xưa” - một chút cổ điển, một chút hoài niệm cùng cảm xúc bồi hồi nhớ về tình yêu thuở đầu quen nhau, tinh tế với những gam màu trầm hoặc trung tính.',
      isVIP: false,
      image: 'assets/images/1f868d40bb6314485ee9f1cb978e6a50.jpeg',
    }
  ];
}
