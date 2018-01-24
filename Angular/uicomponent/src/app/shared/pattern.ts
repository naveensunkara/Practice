export class CrsPatterns{
    user_id: RegExp = /^[0-9\sA-Za-z\u00C0-\u00FF\~\#\";\/!@`$%^&*()_\+\{\}\?\-\[\]\\,.\u0152\u0153\u20A0\u20A3\u0178\u20AC\u2013\u2014\u00C6\u00E6\u00C4\u00E4\u20A3]{5,50}$/;
    password: RegExp =/^[^|]{6,32}$/;
    email: RegExp =/^(?!.*([.])\1{1})([\w\.\-\+\{\}\=\`\|\?]+)@(?![.-])([a-zA-Z\d.-]+)\.([a-zA-Z.][a-zA-Z]{1,6})$/;
    create_user_id: RegExp =/^[0-9\sA-Za-z\!@`$%^*()_\+\{\}\?\-\[\]\\,.]{5,50}$/;
    four_consecutive_digits: RegExp =/\d{4}/;
    create_password: RegExp =/^(?=(?:.*?[0-9]){2})(?=.*[a-zA-Z])[0-9\sA-Za-z\!@\#$%^&*()_\+\{\}?\-\[\]\\,.]{6,32}$/;
    checkpoint_response: RegExp =/^[0-9\sA-Za-z\?\#,.:;\\<|>!=@\#$%^*_\-\+\{\}\[\]]{1,}$/;
    formatted_date: RegExp =/^(0[1-9]|1[012])[-\/.](0[1-9]|[12][0-9]|3[01])[-\/.](19|20)\d\d$/;
    formatted_date_with_stars_pattern: RegExp =/^(0[1-9]|1[012]|\*\*)[-\/.](0[1-9]|[12][0-9]|3[01]|\*\*)[-\/.](((19|20)\d\d)|(\*\*\*\*))$/;
    cvv: RegExp =/^\d{3,4}$/;
    last_four_digits: RegExp =/^\d{4}$/;
    card_number_length: RegExp =/^.{9,16}$/;
    card_number_format: RegExp =/^[0-9]*$/;
    card_name: RegExp =/^[a-zA-Z\s\-'\.]{4,30}$/;
    aba_routing: RegExp =/^\d{1,9}$/;
    account_number: RegExp =/^\d{1,17}$/;
    currency: RegExp =/^\d{1,10}(\.\d{0,2})?$|^\.\d{1,2}$/;
    nickname: RegExp =/^[\s\dA-Za-z\u00C0-\u00FF\!@\#$%^&\*\(\)_\+\{\}\?\-\=\[\]\,\.\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]{0,30}$/;
    card_nickname: RegExp =/^[\s\dA-Za-z\u00C0-\u00FF\!@\#$%^&\*\(\)_\+\{\}\?\-\[\]\,\~\\\\|\/u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]{0,30}$/;
    three_repeating_characters: RegExp =/(.)\1{2,}/;
    phone_number_US: RegExp =/^\d{10}$/;
    has_a_number: RegExp =/\d/;
    security_question_format: RegExp =/^[0-9\sA-Za-z\u00C0-\u00FF0-9\u0152\u0153\u20A0\u0178\u20A3\u20AC\<\>\!@\#$%^*_\+\{\}|:\?\-\=\[\]\\;\/.]*$/;
    whole_number: RegExp =/^([1-9][0-9]*)$/;
    name: RegExp =/^[A-Za-z\.\-\'\s,]*$/;
    name_with_latin_characters: RegExp =/^[A-Za-z\.\-\'\s,\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]*$/;
    numeric_only: RegExp =/^[0-9]*$/;
    numeric_only_with_spaces: RegExp =/^[0-9\s]*$/;
    numeric_two_decimal_places: RegExp =/^\d+(\.\d{1,2})?$/;
    alpha_only: RegExp =/^[A-Za-z]*$/;
    alpha_with_spaces: RegExp =/^[A-Za-z\s]*$/;
    alpha_numeric_only: RegExp =/^[0-9A-Za-z]*$/;
    alphanumeric_with_spaces: RegExp =/^[A-Za-z0-9\s]*$/;
    street_address: RegExp =/^(?![0-9\s]*$)(?!.*[\s]{2,}.*$)(?![\s].*$)(?!.*[\s]$)[0-9A-Za-z\u00C0\u00FF\s\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]{1,24}$/;
    balance_transfer_street_address: RegExp =/^(?![0-9\s-.]*$)(?!.*[\s]{2,}.*$)(?![\s].*$)(?!.*[\s]$)[0-9A-Za-z\u00C0-\u00FF\s-.\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]{1,26}$/;
    apt_suite: RegExp =/^(?!.*[\s]{2,}.*$)(?![\s].*$)(?!.*[\s]$)[0-9A-Za-z\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3\#\s_.-]{1,24}$/;
    balance_transfer_apt_suite: RegExp =/^(?![0-9\s]*$)(?!.*[\s]{2,}.*$)(?![\s].*$)(?!.*[\s]$)[0-9A-Za-z\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3\#\s.-]{1,35}$/;
    city: RegExp =/^(?![\s].*$)(?!.*[\s]$)[A-Za-z\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3\s\.]{1,17}$/;
    balance_transfer_city: RegExp =/^[A-Za-z\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3\s\.]{1,18}$/;
    po_box: RegExp =/^[pc][\.]?[op][\.]?(?:box)?/i;
    zipcode: RegExp =/^[0-9]{5,5}$/;
    postal_code: RegExp =/^[A-Za-z][0-9][A-Za-z]\s[0-9][A-Za-z][0-9]$/;
    consecutive_spaces: RegExp =/\s\s/;
    leading_or_trailing_spaces: RegExp =/^[\s]+|[\s]+$/;
    activation_code: RegExp =/^[A-Za-z0-9]{8}$/;
    dispute_charge_text: RegExp =/^[^<>"%]*$/;
    message_subject: RegExp =/^[^=\"'<>]*$/;
    message_body: RegExp =/^[^=\"'<>]*$/;
    does_not_start_end_with_dash: RegExp =/^[^-].*[^-]$/;
    membernumber_starts_with: RegExp =/7081[0-9]*/;
    five_repeating_characters: RegExp =/(.)\1{4,}/;
    exclude_zip_code: RegExp =/^([0,9])\1{4}$/;
    config = {
        "userId": {
          required:  "Please enter your User ID to sign on." ,
          minlength: "Your User ID must be five to 50 characters in length.",
          maxlength: "Your User ID must be five to 50 characters in length.",
          pattern: "Please try again. Certain special characters are not allowed."
        },
        "password": {
          required:  "Please enter your User ID to sign on." ,
          minlength: "Your User ID must be five to 32 characters in length.",
          maxlength: "Your User ID must be five to 32 characters in length.",
          pattern: "Please try again. Certain special characters are not allowed."
        },
        "card_number": {
          required:  "Please enter a valid Card Number." ,
          pattern: {
            card_number_format: "Please enter a valid Card Number using numbers only.",
            card_number_length: "Please enter a valid Card Number."
          }
        },
        "card_name": {
          required:  "Please enter the Name as it Appears on Your Card." ,
          minlength: "Please enter the Name as it Appears on Your Card.",
          maxlength: "Please enter the Name as it Appears on Your Card.",
          pattern: "Please enter the Name as it Appears on Your Card without using numbers. Certain special characters are not allowed."
        },
        "cvv": {
          required:  "Please enter your Security Code." ,
          maxlength: "Please re-enter your Security Code. Your entry must have 3 or 4 numbers, and cannot contain letters or special characters.",
          pattern: "Please re-enter your Security Code. Your entry must have 3 or 4 numbers, and cannot contain letters or special characters."
        },
        "ssn": {
          required:  "Please enter the Last 4 Digits of the Primary Cardholder's Social Security Number." ,
          maxlength: "Please enter the Last 4 Digits of the Primary Cardholder's Social Security Number using numbers only.",
          pattern: "Please enter the Last 4 Digits of the Primary Cardholder's Social Security Number using numbers only."
        }
    };
}