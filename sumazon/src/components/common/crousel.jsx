import Arrows from './arrows'
import './common.css'

function Crousel (data){
  return (
    <div className="crousel_component">
        <div className="crousel_top">
            <p>{data.info.itemname}</p>
            <Arrows />
        </div>
        <div className="crousel_bottom">
          <div className="crousel_cards">
            {/*  loop for multiple cards */}
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
            <div className="crousel_card">
                <img src= 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/526e878c-49fd-46a8-8d44-9019fac1071b/ja-1-day-basketball-shoes-8dQnK1.png' alt="image"/>
                <div className="card_data">
                    <p>{data.info.item}</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Crousel
