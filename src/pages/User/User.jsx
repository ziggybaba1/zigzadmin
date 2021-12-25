import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid,Publish , Edit} from "@mui/icons-material";
import "./user.scss";
import {Link} from "react-router-dom";

function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                    </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="/img/avatar.jpg" alt="" />
                        <div className="userShowTitle">
                            <div className="userShowUsername">Tolani Toba</div>
                            <div className="userShowUserTitle">Agricultural Scientists</div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity  className="userShowIcon"  />
                            <span className="userShowInfoTitle">tolani66</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday  className="userShowIcon"  />
                            <span className="userShowInfoTitle">10/07/1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid  className="userShowIcon"  />
                            <span className="userShowInfoTitle">+234 813 000 000 00</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline  className="userShowIcon"  />
                            <span className="userShowInfoTitle">tolani66@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching  className="userShowIcon"  />
                            <span className="userShowInfoTitle">Durumi Abuja, Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                  <form action="" className="userUpdateForm">
                      <div className="userUpdateLeft">
                          <div className="userUpdateItem">
                              <label htmlFor="">Username</label>
                              <input type="text" placeholder="tolani66" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label htmlFor="">Fullname</label>
                              <input type="text" placeholder="Tolani Toba" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label htmlFor="">Email</label>
                              <input type="text" placeholder="tolani66@gmail.com" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label htmlFor="">Phone</label>
                              <input type="text" placeholder="+234 813 000 000 00" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label htmlFor="">Address</label>
                              <input type="text" placeholder="Durumi Abuja, Nigeria" className="userUpdateInput" />
                          </div>
                      </div>
                      <div className="userUpdateRight">
                          <div className="userUpdateAvatar">
                              <img src="/img/avatar.jpg" alt="" />
                              <label htmlFor="file"><Publish className="userUpdateIcon" /> </label>
                              <input type="file" id="file" className="userUpdateimgInput" style={{display: 'none'}} />
                          </div>
                          <button className="userUpdateButton">Update</button>
                      </div>
                  </form>
                </div>
            </div>
        </div>
    )
}

export default User
