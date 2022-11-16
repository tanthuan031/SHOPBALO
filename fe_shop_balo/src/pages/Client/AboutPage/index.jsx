/* eslint-disable no-lone-blocks */
import React from 'react';
import {
  about1,
  about2, imageMinhTrung, imageNghia, imageTanThuan, imageVoNhu
} from '../../../asset/images/about';
import AboutInfo from '../../../components/client/About/AboutInfo';
import CardProfile from '../../../components/client/About/CardProfile';
import SimpleMap from '../../../components/client/About/GoogleMap';

const teamData = [
  {
    id: 1,
    name: 'Võ Hoàng Quỳnh Như',
    image: imageVoNhu,
    email: 'mailto:vonhu.alien@gmail.com',
    facebook: 'https://www.fb.com/vohoangquynhnhu',
    role: 'Frontend Developer',
  },
  {
    id: 2,
    name: 'Nguyễn Đức Minh Trung',
    image: imageMinhTrung,
    email: 'vonhu.alien@gmail.com',
    facebook: 'https://www.fb.com/NguyenDucMinhTrung0110',
    role: 'Fullstack Developer',
  },
  {
    id: 3,
    name: 'Hồ Tấn Thuận',
    image: imageTanThuan,
    email: 'vonhu.alien@gmail.com',
    facebook: 'https://www.fb.com/tanthuan031',
    role: 'Fullstack Developer',
  },
  {
    id: 4,
    name: 'Trần Vãn Nghĩa',
    image: imageNghia,
    email: 'vonhu.alien@gmail.com',
    facebook: 'https://www.fb.com/TVNnghia',
    role: 'Fullstack Developer',
  },
];

const aboutData = [
  {
    id: 1,
    isRight: true,
    title: 'Our Story',
    content: `As a "rookie" in the fashion village of Local Brand. Tresor designs with lovely images with
                  bright colors are what make Tresor attractive. With its spacious size, durable natural
                  materials and sturdy strap design, it has helped the product conquer fashion lovers. Is a backpack
                  product with CHEAP price but the quality is not inferior to other brands. Tresor always
                  maintains the best quality through each product. Surely Tresor will be a product that you
                  cannot help but "pocket" right away.`,
    image: about1,
  },
  {
    id: 2,
    isRight: false,
    title: 'Our Mission',
    content: `Tresor with craftsmen with over 20 years of experience, we research and understand deeply about all types of
                  backpacks. We understand every detail of the backpack how to bring the most comfort to the user, how
                  to divide it scientifically to best suit different uses. From design to quality of raw materials, each
                  stitch is carefully invested to bring the most complete products with the highest quality.`,
    image: about2,
  },
];

export function AboutPage(props) {
  return (
    <section>
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <AboutInfo aboutData={aboutData} />
          <div>
            <div className="d-flex flex-column align-items-center mt-5">
              <h3 className="mtext-111 cl2 p-b-16 mb-4">Our Team</h3>

              <div className="d-flex justify-content-center gap-5">
                <CardProfile items={teamData} />
              </div>
            </div>
          </div>

          {/* Map */}
          <SimpleMap />
        </div>
      </section>
    </section>
  );
}
