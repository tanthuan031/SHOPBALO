<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data=[
            [
                'id'=>1,
                'tag_search'=>'BaLo Phượt',
                'name'=>'Balo Du Lịch Nam William Polo Locust',
                'description'=>'Có địa chỉ tại thành phố Hồ Chí Minh, Giao Long được biết đến là nơi phân phối và kinh doanh những sản phẩm chính hãng của thương hiệu William Polo. Với nhiều chính sách bảo hành, đổi trả sản phẩm hấp dẫn, Giao Long tự tin luôn đem đến cho khách hàng dịch vụ tốt nhất. Hiện nay, Giao Long đang có nhiều chương trình sale off “khủng” với nhiều sản phẩm, đến ngay Giao Long để đem về chiếc balo cao cấp cho mình nhé.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-nam-hang-hieu-william-polo-locust-giaolong-.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-nam-da-nang-william-polo-giaolong-1-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-nam-william-polo-locust-giaolong-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>2,
                'tag_search'=>'BaLo Phượt',
                'name'=>'Balo Đẹp Unisex William Polo Cock',
                'description'=>'William Polo Cock là sản phẩm cao cấp dành cho nữ, phù hợp với rất nhiều dịp như đi chơi, đi du lịch hay thậm chí đi học, đi làm. Hiện sản phẩm đang được bày bán tại Giao Long TP.HCM và trang web chính thức của Giao Long. Liên hệ ngay với hotline để được đội ngũ nhân viên tư vấn và giải đáp mọi thắc mắc cũng như mọi chính sách nhé.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-nu-chinh-hang-william-polo-cock-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-nu-nho-gon-william-polo-cock-giaolong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-nu-da-nang-william-polo-cock-giaolong-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>3,
                'tag_search'=>'BaLo Phượt',
                'name'=>'Balo Quechua NH100 20L – Balo Du Lịch Chính Hãng',
                'description'=>'Là một trong những sản phẩm họt nhất của Decathlon. Balo Quechua Hiking NH100 20L cho ra mắt với thiệt kế gọn nhẹ, tiện dụng. Phù hợp với mọi độ tuổi, nghề nghiệp với giá cả tốt nhất thị trường. Phù hợp với các chuyến đi du lịch, phượt, đi bộ đường dài. hãy cùng chiếc balo Quechua 20L này trải nghiệm các khoảnh khác tuyệt vời.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/02/balo-quechua-nh100-20l-5.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/02/balo-quechua-nh100-20l-4-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/02/balo-quechua-nh100-20l-2-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/02/balo-quechua-nh100-20l-1-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>4,
                'tag_search'=>'BaLo Cao Cấp',
                'name'=>'Balo Chống Trộm Cao Cấp Tigernu Obese',
                'description'=>'Giao Long luôn mang cả tấm chân tình trong từng đơn hàng. Chúng tôi luôn mong muốn khách hàng đạt được trải nghiệm tốt nhất ở mỗi lần mua hàng. Vì vậy, sản phẩm ở Giao Long luôn luôn là 100% chính hãng. Bất cứ vấn đề lỗi của sản phẩm đều được đội ngũ nhân viên giải quyết một cách nhanh nhất có thể và hoàn toàn một đổi một miễn phí. Các chính sách hỗ trợ vận chuyển vẫn luôn luôn là điều hiển nhiên của chúng tôi, mọi đơn hàng đều được miễn phí vận chuyển và hỗ trợ giao nhanh.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-laptop-nam-hcm-tigernu-obese-giaolong-.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-laptop-chong-nuoc-tigernu-obese-giaolong--100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-nam-ben-dep-tigernu-obese-giaolong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-nam-chong-trom-tigernu-obese-giaolong-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>5,
                'tag_search'=>'BaLo Cao Cấp',
                'name'=>'Balo Laptop Chống Nước RZTX Fox',
                'description'=>'Mọi vấn đề liên quan tới chất lượng sản phẩm đều được đảm bảo. Mọi sự phàn nàn, không hài lòng của quý khách hàng đều sẽ được đội ngũ nhân viên chuyên nghiệp của Giao Long hỗ trợ hết mình và tận tình. Chúng tôi vẫn sẽ luôn hỗ trợ bạn bằng những chính sách miễn phí vẫn chuyển, đổi trả cũng như tư vấn một cách kĩ càng nhất trước khi bạn đi tới quyết định cuối cùng.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/cap-dung-laptop-RZTX-fox-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-da-nang-RZTX-fox-giaolong--100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-laptop-gia-re-RZTX-fox-giaolong--100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>6,
                'tag_search'=>'BaLo Cao Cấp',
                'name'=>'Balo Mark Ryden Mason – Balo Thông Minh Cao Cấp.',
                'description'=>'Một chiếc balo đẹp và thời thượng không chỉ là phụ kiện đựng đồ hoàn hảo mà còn tô điểm thêm cho bộ trang phục của bạn một cách tinh tế nhất. Balo nam thời trang cao cấp Balo Mark Ryden Mason, thiết kế mới nhất từ Bange chính là gợi ý để bạn chọn cho mình một mẫu balo vừa tiện dụng mà vẫn thật thời trang.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/cap-dung-laptop-RZTX-fox-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-hang-hieu-mark-ryden-mason-baloxinh-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-hang-hieu-mark-ryden-mason-balo-xinh-1-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-hang-hieu-mark-ryden-mason-balo-xinh-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>7,
                'tag_search'=>'BaLo Du Lịch',
                'name'=>' Balo Da Đựng Laptop Parsonker Racoon',
                'description'=>'Chúng tôi là đơn vị chuyên phân phân phối các mẫu balo thời trang được nhiều tín đồ mua sắm ưa thích và có những đánh giá tích cực nhất.
                Mọi sản phẩm tại Giao Long đều được đảm bảo những chính sách sau:
                
                Cam kết hàng được nhập chính hãng 100%.
                1 đổi 1 nếu sản phẩm phát sinh lỗi từ phía nhà sản xuất.
                Giao hàng nhanh chóng tại nội thành TPHCM chỉ trong 24h.
                Nhận giao hàng toàn quốc với ship cod ưu đãi.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-cao-cap-hang-hieu-parsonker-racoon-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-laptop-chinh-hang-parsonker-racoon-giaolong--100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-laptop-chong-nuoc-parsonker-racoon-giaolong-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>8,
                'tag_search'=>'BaLo Du Lịch',
                'name'=>' Balo Nam Hàng Hiệu Outwalk Seal',
                'description'=>'Ngoài việc đảm bảo cho chất lượng sản phẩm là 100% chính hãng chúng tôi còn hỗ trợ việc giao hàng tới bạn với chính sách miễn phí toàn bộ chi phí vận chuyển và đặc biệt còn hỗ trợ giao nhanh trong vòng 24h đối với khách hàng tại TP.HCM

                Tất nhiên nếu khách hàng có bất kỳ phàn nàn, hay bất kì sự không hài lòng nào về sản phẩm thì chúng tôi luôn hết mình hỗ trợ giải đáp một cách nhanh nhất và hiệu quả nhất. Đi đôi với đó là chính sách đổi trả hoàn toàn những sản phẩm bị lỗi hay hư hỏng.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-laptop-gon-nhe-outwalk-seal-giaolong.webp',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-laptop-nu-outwalk-seal-giaolong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-laptop-nhieu-ngan-outwalk-seal-giaolong-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>9,
                'tag_search'=>'BaLo Du Lịch',
                'name'=>'Balo Trekking Kaka Hin',
                'description'=>'Tự hào là một trong những đơn vị đi đầu trong cung cấp các mẫu balo nhập khẩu chính hãng 100%, Giao Long sẽ là lựa chọn hoàn hảo cho những tín đồ yêu thích du lịch. Chúng tôi luôn có nhiều chính sách ưu đãi cho khách hàng như: Hoàn trả 1 – 1 nếu có lỗi sản xuất, giao hàng siêu tốc 24h,… chắc chắn bạn sẽ vô cùng hài lòng khi trải nghiệm sản phẩm của chúng tôi. Đi kèm đó là sự chuyên nghiệp đến từ đội ngũ tư vấn của Giao Long, quý khách sẽ được hỗ trợ tận tình cả offline lẫn online mọi lúc, mọi nơi về các vấn đề kỹ thuật, cách bảo quản hay đổi trả sản phẩm.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-kaka-hin-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-di-phuot-chat-luong-kaka-hin-giaolong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-du-lich-cao-cap-chinh-hang-kaka-hin-giaolong-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>10,
                'tag_search'=>'BaLo Đi Học',
                'name'=>'Balo Đẹp Unisex William Polo Cock',
                'description'=>'William Polo Cock là sản phẩm cao cấp dành cho nữ, phù hợp với rất nhiều dịp như đi chơi, đi du lịch hay thậm chí đi học, đi làm. Hiện sản phẩm đang được bày bán tại Giao Long TP.HCM và trang web chính thức của Giao Long. Liên hệ ngay với hotline để được đội ngũ nhân viên tư vấn và giải đáp mọi thắc mắc cũng như mọi chính sách nhé.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-nu-chinh-hang-william-polo-cock-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-nu-nho-gon-william-polo-cock-giaolong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-hcm-william-polo-cock-giaolong--100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>11,
                'tag_search'=>'BaLo Đi Học',
                'name'=>'Balo Fedom Pooch – Balo Laptop Siêu Phong Cách',
                'description'=>'Fedom Pooch chiếc balo mang phong cách hiện đại, thiết kế mẫu mã độc đáo, trẻ trung và năng động là mẫu balo được nhiều người săn đón nhất năm 2021. Được sử dụng bằng chất liệu polyester chống thấm nước, bền bỉ theo thời gian. Hạn chế làm trầy xước, chống sốc khi va chạm mạnh làm ảnh hưởng đến các thiết bị bên trong. Quai đeo bền chắc đệm mút tổ ong thoáng khí, trợ lực hơn và êm ái hơn khi sử dụng.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-pooch-balo-laptop-sieu-phong-cach-10.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-pooch-2-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-pooch-1-1-100x100.jpg',
                'status'=>true,
            ]
            ,[
                'id'=>12,
                'tag_search'=>'BaLo Đi Học',
                'name'=>' Balo Fedom Kinck – Balo Chống Nước Phong Cách',
                'description'=>'Balo là một lĩnh vực thời trang được chú trọng và đầu tư. Ngoài kiểu dáng bắt mắt hợp phong cách thì chức năng của một chiếc balo là vô cùng quan trọng. Trong 100 khách hàng được Balo Xinh khảo sát gần đây thì chức năng chống nước và chống gù lưng là hai chức năng mà khách hàng quan tâm và phản hồi nhiều nhất với Balo Xinh. Tìm được một chiếc balo có thể bảo vệ các vật dụng giá trị bên trong và điều quan trọng nhất để bảo vệ sức khỏe cho lưng của bạn là không quá khó. Balo Fedom Kinck sẽ giúp bạn khắc phục những điều đó.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-kinck-balo-chong-nuoc-phong-cach-nam-tinh-7.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-kinck-1-1-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-kinck-1-100x100.jpg',
                'status'=>true,
            ],[
                'id'=>13,
                'tag_search'=>'BaLo LapTop',
                'name'=>'Balo Mark Ryden Mate – Balo Thông Minh Cao Cấp',
                'description'=>'Một chiếc balo đẹp và thời thượng không chỉ là phụ kiện đựng đồ hoàn hảo mà còn tô điểm thêm cho bộ trang phục của bạn một cách tinh tế nhất. Balo nam thời trang cao cấp Balo Mark Ryden Mate, thiết kế mới nhất từ Bange chính là gợi ý để bạn chọn cho mình một mẫu balo vừa tiện dụng mà vẫn thật thời trang. ',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-hang-hieu-mark-ryden-mate-9.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-hang-hieu-mark-ryden-mate-baloxinh-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-hang-hieu-mark-ryden-mate-15-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>14,
                'tag_search'=>'BaLo LapTop',
                'name'=>'Balo Laptop BLX10 The Louie Red – Hàng Chính Hãng (Sao chép)',
                'description'=>'Bạn là một tín đồ của Mikkor? Bạn mong muốn sở hữu một chiếc balo chính hiệu của Mikkor vừa đi học, đi chơi, bảo vệ laptop? Còn chần chừ gì nữa mà không đón ngay mốt chiếc balo xinh xẻo đến từ bộ sưu tập THE LOUIE của MIKKOR! Balo Laptop Mikkor The Louie Red với màu đỏ năng động phù hợp với sinh viên và người đi làm. Xứng đáng là người đồng hành trong suốt chặng đường của bạn.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-louie-red-hang-cao-cap-1.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-louie-red-hang-chinh-hang-1-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-louie-red-hong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-louie-red-hang-mat-truoc-100x100.jpg',
                'status'=>true,
            ]
            ,[
                'id'=>15,
                'tag_search'=>'BaLo LapTop',
                'name'=>'Balo Mark Ryden King – Balo Thông Minh Cao Cấp',
                'description'=>'Một chiếc balo đẹp và thời thượng không chỉ là phụ kiện đựng đồ hoàn hảo mà còn tô điểm thêm cho bộ trang phục của bạn một cách tinh tế nhất. Balo nam thời trang cao cấp Balo Mark Ryden King, thiết kế mới nhất từ Bange chính là gợi ý để bạn chọn cho mình một mẫu balo vừa tiện dụng mà vẫn thật thời trang. ',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-chinh-hang-mark-ryden-king.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-chinh-hang-mark-ryden-king-1-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-chinh-hang-mark-ryden-king-2-100x100.jpg',
                'status'=>true,
            ]
            ,[
                'id'=>16,
                'tag_search'=>'BaLo Nam',
                'name'=>'Balo Fedom Nitro – Balo Du Lịch Thương Hiệu Âu Mỹ',
                'description'=>'Chiếc balo du lịch là một vật dụng không thể thiếu cho bạn trong những buổi du lịch cùng gia đình và bạn bè. Ngoài hình dáng sành điệu hợp thời trang thì thiết kế bên trong cũng là một phần quan trọng để tạo nên một chiếc balo bậc nhất. Hiểu được sự cần thiết của balo ngày nay, balo xinh gửi đến bạn một sản phẩm chắc chắn sẽ không làm bạn thất vọng. Balo Fedom Nitro thương hiệu Âu Mỹ là sản phẩm đáng lựa chọn của bạn. ',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/05/balo-mau-xanh-balo-dep-1.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-nitro-thuong-hieu-au-my-3-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-nitro-thuong-hieu-au-my-4-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/05/balo-fedom-nitro-thuong-hieu-au-my-10-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>17,
                'tag_search'=>'BaLo Nam',
                'name'=>' Balo Doanh Nhân Du Lịch Oumantu O6118S Đơn Giản',
                'description'=>'Một siêu phẩm chỉ có tại Balo Xinh. Nếu bạn đang tìm một chiếc balo phù hợp cho người trong lĩnh vực kinh doanh hay một chiếc balo du lịch. Thì mẫu balo cao cấp đến từ thương hiệu Oumantu O6118S này là sự lựa chọn hoàn hảo dành cho bạn. Màu sắc đơn giản, tinh tế siêu thích hợp với người có phong cách giản dị nhưng vẫn toát lên được vẻ đẹp lịch lãm và sang trọng đối với người sử dụng. 

                Một chiếc balo tiện dụng có thể bảo vệ các vật dụng bên trong là không thể thiếu đối với mỗi người chúng ta. Rất tiện ích cho mỗi chuyến đi xa hay công tác ngắn ngày. Balo Oumantu O6118S được sản xuất với chất liệu vải Polyester siêu bền bỉ, không phai màu theo thời gian, chống thấm nước cao…Thiết kế cổng sạc USB bên ngoài bạn có thể sạc mọi lúc mọi nơi. Liên hệ ngay website: BaloXinh.vn để được gặp các chuyên viên tư vấn và đặt hàng đi nào?',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/03/balo-thoi-trang-du-lich-don-gian.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/03/4-mau-cua-balo-oumatu-cao-cap-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/03/balo-oumantu-cao-cap-xam-xanh-100x100.jpg',
                'status'=>true,
            ]
            ,[
                'id'=>18,
                'tag_search'=>'BaLo Nam',
                'name'=>'Balo Oumantu Cao Cấp O6702 Dành Cho Công Sở',
                'description'=>'Nếu bạn là người làm trong lĩnh vực kinh doanh thì chắc chắn bạn không thể bỏ qua được mẫu balo Oumantu cao cấp O6702 này!!

                Thiết kế dành riêng cho phong cách công sở. Màu sắc sang trọng kết hợp hài hòa giữa 3 màu đen, xám và xám nhạt gây sự chú ý với người đối diện. Kiểu dáng vuông vức không phô cứng bởi đường bo góc tinh tế. Ngăn chứa rộng rãi chứa được laptop đến 16 inch và các đồ dùng tiện lợi phù hợp sử dụng khi đi công tác. ',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/03/balo-oumantu-cao-cap-sang-trong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/03/balo-oumantu-cao-cap-tai-balo-xinh-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/03/balo-oumantu-cao-cap-danh-cho-nam-1-1-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>19,
                'tag_search'=>'BaLo Nữ',
                'name'=>'Balo Nữ Hàn Quốc Danbaoly Hint',
                'description'=>'Từ trước đến nay, Giao Long luôn đặt uy tín lên hàng đầu, lấy sự hài lòng của khách hàng và chất lượng sản phẩm làm tiêu chí để phát triển. Vì vậy mà mỗi sản phẩm đều được Giao Long shop chăm sóc rất kỹ, bảo hành từng chút một. Thời gian bảo hành tại đây có thể lên tới 5 năm, miễn phí giao hàng trên toàn quốc hoặc 1 đổi 1 trong vòng 90 ngày nếu sản phẩm xảy ra lỗi. Ngoài ra còn có vô số chính sách ưu đãi khác dành cho khách hàng mới và cả những khách hàng thân quen.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-danbaoly-hint-giaolong-13.webp',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-nho-cho-nu-danbaoly-hint-giaolong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-dung-laptop-nu-dep-danbaoly-hint-giaolong-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>20,
                'tag_search'=>'BaLo Nữ',
                'name'=>'Balo Da Nữ Thời Trang Danbaoly Mesi',
                'description'=>'Balo da Danbaoly Mesi là một chiếc balo da bò cực cá tính phù hợp với nhiều cách phối và màu sắc phối khác nhau. Bạn có thể sử dụng để đi du lịch, đi học hay đi làm đều rất tuyệt vời, nó sẽ giúp tôn lên vẻ đẹp tự nhiên, sang trọng, quý phái của bạn. Liên hệ ngay qua hotline của Giao Long để mua hàng với giá cực kỳ ưu đãi và nhiều chương trình khuyến mãi cực kỳ hấp dẫn nhé.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/Balo-Da-Nu-Thoi-Trang-Cao-Cap-Danbaoly-Mesi-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/balo-da-dep-cho-nu-Danbaoly-Mesi-giaolong-1-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/balo-nu-da-mem-Danbaoly-Mesi-giaolong-1-100x100.jpg',
                'status'=>true,
            ]
            ,[
                'id'=>21,
                'tag_search'=>'BaLo Nữ',
                'name'=>'Balo BLX06 The Ella Orange – Hàng Chính Hãng Từ Mikkor',
                'description'=>'Là một trong những mẫu mới nhất đến từ thương hiệu nổi tiếng Mikkor, được tô điểm thêm với màu cam rực rỡ, thiết kế thời trang và cá tính. Balo Mikkor The Ella Orange là một những cực phẩm được săn đón nhiều nhất của giới trẻ từ học sinh, sinh viên cho đến người đi làm.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-laptop-blx06-mikkor-the-ella-orange-2.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-laptop-blx06-mikkor-the-ella-orange-3-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2020/08/balo-laptop-blx06-mikkor-the-ella-orange-4-100x100.jpg',
                'status'=>true,
            ]
            ,
            [
                'id'=>22,
                'tag_search'=>'BaLo Một Quai',
                'name'=>'Balo BLX21 The Arnold Delux Red – Balo Laptop Một Quai',
                'description'=>'Balo 1 Quai BLX21 The Arnold Delux Red là dòng balo laptop một quai mới nhất đến từ thương hiệu Mikkor. Được thiết kế theo phong cách balo laptop một quai năng động kèm dây đai nịt ngực giúp cân bằng và cố định balo khi bạn đeo Với phong cách độc đáo, năng động, trẻ trung, chiếc balo một quai này được rất nhiều bạn trẻ săn đón. Dưới đây là một số thông tin về sản phẩm này.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2020/08/tui-balo-1-quai-mikkor-the-arnold-delux-red.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2020/08/tui-balo-1-quai-mikkor-the-arnold-delux-red-4-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2020/08/tui-balo-1-quai-mikkor-the-arnold-delux-red-3-100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>23,
                'tag_search'=>'BaLo Một Quai',
                'name'=>'Balo BLX22 The Arnold Delux Dark Mouse Grey – Balo Laptop Một Quai',
                'description'=>'Balo 1 Quai BLX22 The Arnold Delux Dark Mouse Grey – Màu xám chuột  là dòng balo laptop một quai mới nhất đến từ thương hiệu  Mikkor. Được thiết kế theo phong cách balo laptop một quai năng động kèm dây đai nịt ngực giúp cân bằng và cố định balo khi bạn đeo Với phong cách độc đáo, năng động, trẻ trung, chiếc balo một quai này được rất nhiều bạn trẻ săn đón. Dưới đây là một số thông tin về sản phẩm này.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-arnold-delux-dark-mouse-grey-1.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-arnold-delux-dark-mouse-grey-4-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-arnold-delux-dark-mouse-grey-5-100x100.jpg',
                'status'=>true,
            ]
            ,[
                'id'=>24,
                'tag_search'=>'BaLo Một Quai',
                'name'=>'Balo BLX24 The Arnold Delux Graphite – Balo Laptop Một Quai',
                'description'=>'Balo 1 Quai BLX24 The Arnold Delux Graphite là dòng balo laptop một quai mới nhất đến từ thương hiệu Mikkor. Được thiết kế theo phong cách balo laptop một quai năng động kèm dây đai nịt ngực giúp cân bằng và cố định balo khi bạn đeo Với phong cách độc đáo, năng động, trẻ trung, chiếc balo một quai này được rất nhiều bạn trẻ săn đón. Dưới đây là một số thông tin về sản phẩm này.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-arnold-delux-graphite.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-arnold-delux-graphite-balo-than-sau-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2020/08/balo-mikkor-the-arnold-delux-graphite-cao-cap-100x100.jpg',
                'status'=>true,
            ]
            ,
            [
                'id'=>25,
                'tag_search'=>'BaLo Hàng Hiệu',
                'name'=>'Túi Đeo Chéo Nam Cao Cấp Tigernu Shy',
                'description'=>'Tigernu Shy đem tới sự mạnh mẽ, nam tính, lịch lãm cho người sử dụng. Sản phẩm này sẽ tạo nên cơn sốt lớn vậy nên hãy nhanh tay đặt mua ngay một chiếc túi Tigernu Shy trước khi sản phẩm sold out trên mọi mặt trận. Giao Long, chăm sóc khách hàng tận tâm, phục vụ khách hàng tận tình, luôn luôn lắng nghe mọi ý kiến đóng góp về chất lượng dịch vụ và chất lượng sản phẩm để đem tới những trải nghiệm, dịch vụ cao cấp, tuyệt vời nhất cho bạn.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/tui-deo-cheo-nam-gia-re-tigernu-shy-giaolong-900x900.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/tui-deo-cheo-tigernu-shy-giaolong--100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/tui-hcm-tigernu-shy-giaolong--100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>26,
                'tag_search'=>'BaLo Hàng Hiệu',
                'name'=>'Balo cao cấp chính hãng Mark Ryden Raw',
                'description'=>'Một chiếc balo đẹp và thời thượng không chỉ là phụ kiện đựng đồ hoàn hảo mà còn tô điểm thêm cho bộ trang phục của bạn một cách tinh tế nhất. Balo nam thời trang cao cấp Balo Mark Ryden Raw, thiết kế mới nhất từ Bange chính là gợi ý để bạn chọn cho mình một mẫu balo vừa tiện dụng mà vẫn thật thời trang. ',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-chinh-hang-mark-ryden-raw-14.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-chinh-hang-mark-ryden-raw-11-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2021/08/Balo-cao-cap-chinh-hang-mark-ryden-raw-10-100x100.jpg',
                'status'=>true,
            ]
            ,[
                'id'=>27,
                'tag_search'=>'BaLo Hàng Hiệu',
                'name'=>'BALO B2B05 L.NAVY – HÀNG CHÍNH HÃNG CỦA SIMPLECARRY',
                'description'=>'Balo SimpleCarry B2B05 L.navy là một trong những mẫu được ưa chuộng nhất thị trường hiện nay. Với thiết kế độc đáo ,tiện lợi để đi chơi ,đi làm hay đi học. Chính vì vậy đây là chiếc balo là siêu phẩm được giới trẻ hiện nay săn đón nhiều nhất.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-laptop-sc-b2b05-l-navy.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2020/08/balo-laptop-sc-b2b05-l-navy-1-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2020/08/balo-laptop-sc-b2b05-l-navy-3-100x100.jpg',
                'status'=>true,
            ]
            ,
            [
                'id'=>28,
                'tag_search'=>'BaLo Quà Tặng',
                'name'=>'Túi Xách Quảng Châu Cao Cấp William Polo Moth',
                'description'=>'William Polo Moth dự kiến sẽ tạo nên làn sóng trong cộng đồng và sold out trên mọi mặt trận trong thời gian tới. Nhanh tay đặt ngay cho mình chiếc William Polo Moth tại website Giao Long để nhận được những ưu đãi hot nhất, những chính sách bảo hành tuyệt vời nhất cùng đội ngũ nhân viên tuyệt vời nhất tại Giao Long.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/tui-xach-da-that-william-polo-month-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/tui-xach-thoi-trang-cao-cap-william-polo-month-giaolong--100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/tui-nam-cao-cap-william-polo-month-giaolong--100x100.jpg',
                'status'=>true,
            ],
            [
                'id'=>29,
                'tag_search'=>'BaLo Quà Tặng',
                'name'=>'Túi Xách Da Nữ Cao Cấp William Polo Ox',
                'description'=>'Mọi sản phẩm khi được chuyển tới tay bạn đều được đảm bảo 100% hàng chính hãng, mọi vấn đề liền quan tới chất lượng sản phẩm đều được giải quyết một cách gọn gàng và nhanh chóng. Bên cạnh đó, Giao Long luôn mở các chương trình khuyến mãi, miễn phí vận chuyển cho khách hàng. Đội ngũ nhân viên chúng tôi luôn sẵn sàng để giải quyết mọi thắc mắc và tư vấn hết mình cho người tiêu dùng.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/tui-xach-thoi-trang-gia-re-william-polo-ox-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/tui-da-da-nang-william-polo-ox-giaolong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/tui-xach-hcm-william-polo-ox-giaolong-100x100.jpg',
                'status'=>true,
            ]
            ,[
                'id'=>30,
                'tag_search'=>'BaLo Quà Tặng',
                'name'=>'Túi Xách Da Nam William Polo Lux',
                'description'=>'Với kinh nghiệm lâu năm cùng sự chuyên nghiệp trong cách tư vấn, phục vụ, Giao Long sẽ là địa điểm chọn lựa uy tín dành cho mọi khách hàng có nhu cầu mua túi xách William polo Lux. Chúng tôi luôn bày bán những sản phẩm chính hãng 100%, đề cao sự chất lượng và nói không với hàng nhái, hàng giả. Với đội ngũ chuyên viên ưu tú, tận tâm, nhiệt tình, mọi khách hàng đến với Giao Long đều được hướng dẫn và lựa chọn mẫu túi ưng ý nhất mà không cần quá lo lắng về giá cả. Bởi mức giá mà chúng tôi định ra luôn đảm bảo cạnh tranh số 1 tại thị trường hiện nay.',
                'image'=>'https://baloxinh.vn/wp-content/uploads/2022/10/tui-xach-da-cao-cap-william-polo-lux-giaolong.jpg',
                'image_slider'=>'https://baloxinh.vn/wp-content/uploads/2022/10/tui-xach-cao-cap-william-polo-lux-giaolong-100x100.jpg,https://baloxinh.vn/wp-content/uploads/2022/10/tui-xach-hang-hieu-william-polo-lux-giaolong--100x100.jpg',
                'status'=>true,
            ]
        ];
        foreach($data as $item){
         $id=   DB::table('products')->insertGetId([
                'category_id'=>Category::where('name','like','%'.$item['tag_search'].'%')->first()->id,
                'name'=>$item['name'],
                'description'=>$item['description'],
                'image'=>$item['image'],
                'image_slide'=>$item['image_slider'],
                'status'=>$item['status'],
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
            DB::table('product_details')->insert([
                'product_id'=>$id,
                'code_color'=>'#ffe00',
                'amount'=>30,
                'price'=>120000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}
