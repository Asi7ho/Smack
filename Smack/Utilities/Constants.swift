//
//  Constants.swift
//  Smack
//
//  Created by Yann Debain on 09/01/2018.
//  Copyright © 2018 Debain Yann. All rights reserved.
//

import Foundation

//Completion Handler
typealias ComletionHandler = (_ Succes: Bool) -> ()


//Color
let SMACK_PURPLE_PLACE_HOLDER = #colorLiteral(red: 0.3254901961, green: 0.4215201139, blue: 0.7752227187, alpha: 0.5)

//Notification Constants
let NOTIFICATION_USER_DATA_DID_CHANGE = Notification.Name("notifUserDataChanged")
let NOTIFICATION_CHANNELS_LOADED = Notification.Name("channelsLoaded")
let NOTIFICATION_CHANNEL_SELECTED = Notification.Name("selectedChannel")

//URL Constants
let LOCAL_BASE_URL = "http://localhost:3005/v1/"
let LOCAL_URL_REGISTER = "\(LOCAL_BASE_URL)account/register"
let LOCAL_URL_LOGIN = "\(LOCAL_BASE_URL)account/login"
let LOCAL_URL_USER_ADD = "\(LOCAL_BASE_URL)user/add"
let LOCAL_USER_BY_EMAIL = "\(LOCAL_BASE_URL)user/byEmail"
let LOCAL_URL_GET_ALL_CHANNEL = "\(LOCAL_BASE_URL)channel"
let LOCAL_URL_GET_MESSAGES = "\(LOCAL_BASE_URL)/message/byChannel"


let BASE_URL = "https://smackchatlessondevslopes.herokuapp.com/v1"
let URL_REGISTER = "\(BASE_URL)/account/register"
let URL_LOGIN = "\(BASE_URL)/account/login"
let URL_USER_ADD = "\(BASE_URL)/user/add"
let USER_BY_EMAIL = "\(BASE_URL)/user/byEmail"
let URL_GET_ALL_CHANNEL = "\(BASE_URL)/channel"
let URL_GET_MESSAGES = "\(BASE_URL)/message/byChannel"

//Header
let HEADER = [
    "Content-Type": "application/json; charset = utf-8"
]

let BEARER_HEADER = [
    "Authorization": "Bearer \(AuthService.instance.authToken)",
    "Content-Type": "application/json; charset = utf-8"
]


//Segue
let TO_LOGIN = "toLogin"
let TO_CREATE_ACCOUNT = "toCreateAccount"
let UNWIND = "unwindToChannel"
let TO_AVATAR_PICKER = "toAvatarPicker"

//User Defaults
let TOKEN_KEY = "token"
let LOGGED_IN_KEY = "loggedIn"
let USER_EMAIL = "userEmail"

