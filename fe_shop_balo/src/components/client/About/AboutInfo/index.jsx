import React from 'react';

const AboutInfo = ({aboutData}) => {
  return (
    <>
      {aboutData.length > 0 &&
        aboutData.map((item, index) => (
          <div className="row p-b-148">
            <div className={`col-md-7 col-lg-8 ${item.isRight ? '' : 'order-md-2'}`}>
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">{item.title}</h3>

                <p className="stext-113 cl6 p-b-26 fs-5">{item.content}</p>
              </div>
            </div>

            <div className={`col-11 col-md-5 col-lg-4 m-lr-auto ${item.isRight ? '' : 'order-md-1'}`}>
              <div className={`${item.isRight ? 'how-bor1' : 'how-bor2'} `} style={{ width: '25rem', height: '20rem' }}>
                <div className="hov-img0">
                  <img src={item.image} alt="IMG" style={{ width: '25rem', height: '20rem' }} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutInfo;