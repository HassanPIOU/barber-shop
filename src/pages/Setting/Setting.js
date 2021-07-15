import React, {useEffect,useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Layout from "../../layout/Layout";
import {APP_NAME, SERVER} from "../../base/app";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {getReviews, UpdatemyInfo} from "../../store/actions/bookingActions";
import {useToasts} from "react-toast-notifications";
import JustLoading from "../../components/PageLoader/JustLoading";
import Empty from "../../components/Empty";


const  Setting  = ({auth : {me},UpdatemyInfo, user : {user,isLoading},reviews : {reviews},getReviews}) => {

    const { addToast } = useToasts();
    useEffect(() => {

        getReviews()
        document.title = APP_NAME+" -  Settings"
        if (user){
            addToast("Profile update successfully",{appearance : "success"})
        }
    },[user])

    const [firstname,setFirstname] = useState(me.first_name)
    const [lastname,setLastname] = useState(me.last_name)
    const [email,setEmail] = useState(me.email)
    const [phone,setPhone] = useState(me.phone)
    const [profil,setProfil] = useState(me.photo ? me.photo : "img/blank.png")


    const handlepicture = e =>{
        setProfil(URL.createObjectURL(e.target.files[0]))
    }

    const UpdateUser = (e) =>{
        e.preventDefault()
        if (firstname == "" || lastname == "" || email == "" ||  phone == ""){
            addToast("Information can't be empty",{appearance : "error"})
        }else{

           const formData = new FormData()
            formData.append('first_name',firstname)
            formData.append('last_name',lastname)
            formData.append('email',email)
            formData.append('phone',phone)
             const file = document.getElementById('updatePic').files[0]
            formData.append('profil',file)

            UpdatemyInfo(formData)

        }
    }


  return (
   <Layout>
       <div className="secondHeader">
           <h1>Settings</h1>
       </div>

       <div className="container mt-5">
           <div className="row mt-5">
               <Tabs className="tabs-setting container mt-5" >
                   <TabList>
                       <Tab>About</Tab>
                       <Tab>Update password</Tab>
                       <Tab>Reviews</Tab>
                   </TabList>

                   <TabPanel>
                       <div className="row">
                           <div className="col-lg-4 ">
                               <div className="about__ava__box">
                                   <img src={profil != "img/blank.png" ? SERVER+profil : "img/blank.png"} alt="" className="avatar__user" />
                                   <p>
                                       <strong>{me.first_name} {me.last_name}</strong>

                                       <label htmlFor="updatePic" className="btn gold mt-2">
                                           <input type="file" id="updatePic" onChange={e=> handlepicture(e)} style={{display : "none"}}/> Change Picture
                                       </label>
                                   </p>
                               </div>
                           </div>
                           <div className="col-lg-8">
                                <div className="row">

                                    <div className="col-lg-6">
                                        <label htmlFor="">Firstname</label>
                                        <input type="text" className="custom__input" value={firstname}
                                               onChange={e=> setFirstname(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="">Lastname</label>
                                        <input type="text" className="custom__input" value={lastname}
                                               onChange={e=> setLastname(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="">Email</label>
                                        <input type="email" className="custom__input"
                                               onChange={e=> setEmail(e.target.value)}
                                               value={email} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="">Mobile Number</label>
                                        <input type="text" className="custom__input" value={phone}
                                               onChange={e=> setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="offset-lg-4 col-lg-4">
                                        <button type="submit" onClick={UpdateUser}  className="btn btn-block gold">
                                            {isLoading ?
                                                <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</> :
                                                <span>Update</span>
                                            }</button>
                                    </div>
                                </div>

                           </div>
                       </div>
                   </TabPanel>
                   <TabPanel>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias asperiores corporis delectus dicta distinctio ea expedita maiores molestiae nesciunt nostrum nulla odio possimus reiciendis similique tenetur, unde voluptate voluptates?
                   </TabPanel>

                   <TabPanel>
                       <div className="" style={{padding : "20px"}}>
                           <div className="box__header">
                               <div className="__title">rating</div>
                           </div>
                           <div className="box__body">
                               <div className="row">
                                   <div className="col-lg-3">
                                       <h1 className="rating_five">5<sub><small>Stars</small></sub></h1>
                                   </div>
                                   <div className="col-lg-9">
                                       <h3>Review</h3>
                                       <div className="row">
                                       {
                                           reviews ?
                                               <>
                                                   {
                                                       reviews.length > 0 ?
                                                       <>
                                                           {
                                                               reviews.map((item,k) =>

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
                                                              )
                                                           }
                                                       </>
                                                       :    <p className="text-center text-danger">Your reviews list is empty</p>
                                                   }
                                               </>
                                               : <JustLoading />
                                       }
                                               </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </TabPanel>
               </Tabs>


           </div>
       </div>


   </Layout>
  )

}
const mapStateToProps = (state) => ({
    auth : state.auth,
    user : state.user,
    reviews : state.reviews,
});


export default compose(withRouter, connect(mapStateToProps, {UpdatemyInfo,getReviews} ))(Setting);
