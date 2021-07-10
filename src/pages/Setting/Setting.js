import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Layout from "../../layout/Layout";
import {APP_NAME} from "../../base/app";

class Setting  extends Component {

    constructor(props) {
        super(props)
        this.state = {
            about: 1,
            payment: 1,
            setting: 1,
            rating: 1,
        }

    }

    componentDidMount ()  {
        document.title = APP_NAME+" -  Settings"

    }


    showAbout = () =>{
            this.setState({
                about: 2,
                payment: 1,
                setting: 1,
                rating: 1,
            })
    }
    showPayment = () =>{
        this.setState({
            about: 1,
            payment: 2,
            setting: 1,
            rating: 1,
        })
    }
    showSetting = () =>{
        this.setState({
            about: 1,
            payment: 1,
            setting: 2,
            rating: 1,
        })
    }
    showRating = () =>{
        this.setState({
            about: 1,
            payment: 1,
            setting: 1,
            rating: 2,
        })
    }



    render(){
  return (
  <>
   <Layout>
       <div className="container">
           <div className="row">
               <div className="col col-xl-9 order-xl-2 col-lg-6 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12 box-content">
                   {this.state.about == 2 && <div className="" style={{padding : "20px"}}>
                       <div className="box__header">
                           <div className="__title">About Barber</div>
                       </div>
                       <div className="box__body">
                           <div className="row">
                               <div className="col-lg-4 about__ava__box">
                                   <img src="img/blank.png" alt="" className="avatar__user" />
                                   <p><strong>{this.props.username}</strong></p>
                                   <p ><StarRatingComponent
                                       name="about_rating"
                                       value="4"
                                       editing={false}
                                   /></p>
                               </div>
                               <div className="col-lg-8">
                                   <div className="row">
                                       <div className="col-lg-6">
                                           <label htmlFor="">Name</label>
                                           <input type="text" className="custom__input" value={this.props.username}/>
                                       </div>
                                       <div className="col-lg-6">
                                           <label htmlFor="">Email</label>
                                           <input type="text" className="custom__input" value={this.props.email} />
                                       </div>
                                       <div className="col-lg-6">
                                           <label htmlFor="">Password</label>
                                           <input type="password" className="custom__input" value="123456"/>
                                       </div>
                                       <div className="col-lg-6">
                                           <label htmlFor="">Organisation</label>
                                           <input type="text" className="custom__input"  />
                                       </div>
                                       <div className="col-lg-12">
                                           <label htmlFor="">Mobile Number</label>
                                           <input type="text" className="custom__input"/>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>}

                   {this.state.setting == 2 && <div className="" style={{padding : "20px"}}>
                       <div className="box__header">
                           <div className="__title">Availability Setting</div>
                       </div>
                       <div className="box__body">
                           <form action="">
                               <div className="row">
                                   <div className="col-lg-6">
                                       <label htmlFor="from">From</label>
                                       <input
                                           className="form-control"
                                           id="from"
                                           name="from"
                                           type="time"
                                           placeholder=""
                                       />
                                   </div>
                                   <div className="col-lg-6">
                                       <label htmlFor="to">To</label>
                                       <input
                                           className="form-control"
                                           id="to"
                                           name="to"
                                           type="time"
                                           placeholder=""
                                       /></div>
                                   <div className="offset-lg-4 col-lg-4 mt-5">
                                       <button type="sbmit" className="fabl fabl-block gold">Proceed</button>
                                   </div>
                               </div>
                           </form>
                       </div>
                   </div>}

                   {this.state.payment == 2 && <div className="" style={{padding : "20px"}}>
                       <div className="box__header">

                           <div className="__title">Payment method</div>
                       </div>
                       <div className="box__body">
                           <div className="row">
                               <div className="col-lg-3">
                                   <h3>Your Card Details</h3>
                                   <br/>
                                   <div className="__pay__card">
                                       <i className="fa fa-cc-visa"></i>
                                   </div>
                                   <div className="__pay__card">
                                       <i className="fa fa-cc-mastercard"></i>
                                   </div>
                               </div>
                               <div className="col-lg-9">
                                   <form action="">
                                       <div className="row">
                                           <div className="col-lg-12">
                                               <input type="text" className="custom__input" placeholder="Name on Card" />
                                           </div>
                                           <div className="col-lg-12">
                                               <input type="text" className="custom__input" placeholder="Card Number"/>
                                           </div>
                                           <div className="col-lg-6">
                                               <input type="month" className="custom__input" placeholder="" />
                                           </div>
                                           <div className="col-lg-6">
                                               <input type="number" className="custom__input" placeholder="123" />
                                           </div>

                                           <div className="col-lg-12">
                                               <br/>
                                               <label className="f-radio">Select to save card
                                                   <input type="checkbox" name="squareradio" />
                                                   <span className="square"></span>
                                               </label>
                                           </div>

                                       </div>

                                       <div className="offset-lg-4 col-lg-4">
                                           <button className="fabl fabl-block gold">Proceed</button>
                                       </div>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>}

                   {this.state.rating == 2 && <div className="" style={{padding : "20px"}}>
                       <div className="box__header">
                           <div className="__title">rating</div>
                       </div>
                       <div className="box__body">
                           <div className="row">
                               <div className="col-lg-4 about__ava__box">
                                   <img src="img/bank.png" alt="" className="avatar__user" />
                                   <p><strong>{this.props.username}</strong></p>
                                   <p ><StarRatingComponent
                                       name="about_rating"
                                       value="4"
                                       editing={false}
                                   /></p>
                               </div>
                               <div className="col-lg-8">
                                   <h3>Review</h3>
                                   <div className="row">
                                       <div className="col-lg-12 __trending">
                                           <div className="row">
                                               <div className="col-lg-7">
                                                   Person A
                                               </div>
                                               <div className="col-lg-5">
                                                   <p className="text-right"><StarRatingComponent
                                                       name="about_rating"
                                                       value="5"
                                                       editing={false}
                                                   /></p>
                                               </div>
                                           </div>
                                           <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                                           <hr/>
                                       </div>

                                       <div className="col-lg-12 __trending">
                                           <div className="row">
                                               <div className="col-lg-7">
                                                   Person B
                                               </div>
                                               <div className="col-lg-5">
                                                   <p  className="text-right"><StarRatingComponent
                                                       name="about_rating"
                                                       value="2"
                                                       editing={false}
                                                   /></p>
                                               </div>
                                           </div>
                                           <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                                           <hr/>
                                       </div>

                                       <div className="col-lg-12 __trending">
                                           <div className="row">
                                               <div className="col-lg-7">
                                                   Person C
                                               </div>
                                               <div className="col-lg-5">
                                                   <p  className="text-right"><StarRatingComponent
                                                       name="about_rating"
                                                       value="3"
                                                       editing={false}
                                                   /></p>
                                               </div>
                                           </div>
                                           <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>}
               </div>
               <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
                   <div className="box-content">
                       <div className="ui-block-title">
                           <h6>Settings</h6></div>

                       <ul className="widget w-playlist">
                           <li className="js-open-popup" data-popup-target=".playlist-popup">
                               <button className="setting__links" onClick={this.showAbout}>About</button>
                           </li>
                           <li className="js-open-popup" data-popup-target=".playlist-popup">
                               <button className="setting__links" onClick={this.showPayment}>Payment Method</button>
                           </li>
                           <li className="js-open-popup" data-popup-target=".playlist-popup">
                               <button className="setting__links" onClick={this.showSetting}>Availability setting</button>
                           </li>
                           <li className="js-open-popup" data-popup-target=".playlist-popup">
                               <button className="setting__links" onClick={this.showRating}>Ratings</button>
                           </li>
                       </ul>

                   </div>
               </div>
           </div>
       </div>
   </Layout>
    </>
  )
}
}

export default Setting