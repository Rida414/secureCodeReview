module.exports = {
    responseCode: {
        _00: "00",
        _01: "01", // for normal error
        _02: "02", // success response from db but with error
        _03: "03", // for popup message
        _94: "94",
        _95: "95",
        _96: "96", //db error
        _97: "97",
        _98: "98",
        _99: "99",
    },
   
    responseMsg: {
        error_app_version: "Cannot get app version contact IT",
        error_login_ad_user:"No user details found",
  	error_login_ad_user_authorized:"You are not authorized to use this system, Please email domain userid with GM approval",
        error_login_ad_user_authorized_deactive:"Your ID is deactivated",
        error_login_ad_block:"Your domain user id is restricted / block / not allowed to login",
        error_login_ad_incorrect_pwd:"Incorrect user name or password. Please try again",
        error_login_method:'No method selected for login, Please check configuration to use login system',
        error_no_access: 'You don\'t have access on your system',
        error_token_invalid: "Authorization token is not valid",
        error_token_not_supply: "Auth token is not supplied",
        error_token_expire: "Session expire",
        error_token_invalid_apk: "Invalid APK",
        error_token_download: "Could not download the file. ",
        error_identifier: 'invalid identifier',
        error_general: 'Your request cannot be process at this time, please try again later',
        error_norecord: 'no record found',
        error_service: 'functionality temporarily unavailable, please try again',
        error_basic_param: 'invalid basic parameters',
        error_identifier: 'invalid identifier',
        error_otp_count: 'you have reached maximum number of attempts for resend otp',
        error_resend_otp_send_record_null: 'otp record not found, please close application and try again',
        error_otp_not_match: 'otp does not match',
        error_device_register: 'this device is not registered, please re-install the application',
        error_db_update_record: 'Document matched, but no modifications were made may be same data provided',
        error_db_match_record: 'No document matched',
        success: 'success',
        success_db_update_record: 'Document updated successfully',
        success_db_inserted_record: 'Document inserted successfully',
        success_db_deleted_record: 'Document deleted successfully'
    },
    convertedObject : {
        status: "99",
        message: "something went wrong ..",
        data: [],
        error:''    
    },
    constant:{
        channel_id_1: 'WEB',
        channel_id_2: 'ANDROID'
    } 
}