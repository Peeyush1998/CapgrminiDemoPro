$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("omayologin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the omayo application",
  "description": "",
  "id": "login-to-the-omayo-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should only be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit to the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\" into the fields",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"\u003cloginstatus\u003e\" status",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginstatus"
      ],
      "line": 10,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "arun",
        "pswd1",
        "failure"
      ],
      "line": 11,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "SeleniumByArun",
        "Test143$",
        "success"
      ],
      "line": 12,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "motoori",
        "pswd2",
        "failure"
      ],
      "line": 13,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User should only be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit to the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"arun\" and Password as \"pswd1\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"failure\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OmayoLogin.I_navigate_to_the_omayo_website()"
});
formatter.result({
  "duration": 23527541700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arun",
      "offset": 21
    },
    {
      "val": "pswd1",
      "offset": 44
    }
  ],
  "location": "OmayoLogin.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 278263500,
  "status": "passed"
});
formatter.match({
  "location": "OmayoLogin.I_click_on_Login_button()"
});
formatter.result({
  "duration": 178330900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 37
    }
  ],
  "location": "OmayoLogin.User_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 6938200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should only be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit to the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"SeleniumByArun\" and Password as \"Test143$\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"success\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OmayoLogin.I_navigate_to_the_omayo_website()"
});
formatter.result({
  "duration": 12706954600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SeleniumByArun",
      "offset": 21
    },
    {
      "val": "Test143$",
      "offset": 54
    }
  ],
  "location": "OmayoLogin.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 294110400,
  "status": "passed"
});
formatter.match({
  "location": "OmayoLogin.I_click_on_Login_button()"
});
formatter.result({
  "duration": 144265800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 37
    }
  ],
  "location": "OmayoLogin.User_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 344762700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should only be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit to the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"motoori\" and Password as \"pswd2\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"failure\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OmayoLogin.I_navigate_to_the_omayo_website()"
});
formatter.result({
  "duration": 16810060100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "motoori",
      "offset": 21
    },
    {
      "val": "pswd2",
      "offset": 47
    }
  ],
  "location": "OmayoLogin.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 249727500,
  "status": "passed"
});
formatter.match({
  "location": "OmayoLogin.I_click_on_Login_button()"
});
formatter.result({
  "duration": 75851100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 37
    }
  ],
  "location": "OmayoLogin.User_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 4081700,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Searching of various categories should be possible along with product search",
  "description": "\r\nIt is good to provide an option to our end users where they can search for the products\r\nbased on their category, rather than only searching a product.This will increase our \r\nbusiness and make end users happy.",
  "id": "searching-of-various-categories-should-be-possible-along-with-product-search",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "Visiting the website as a guest user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I visit the website as a guest user",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.I_visit_the_website_as_a_guest_user()"
});
formatter.result({
  "duration": 194700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search for the products under Books category",
  "description": "",
  "id": "searching-of-various-categories-should-be-possible-along-with-product-search;search-for-the-products-under-books-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Search"
    },
    {
      "line": 10,
      "name": "@Books"
    },
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I visit the website as a guest user",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select the books option from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Search icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the books page loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see Books at Amazon as heading",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should not see other category products",
  "keyword": "But "
});
formatter.match({
  "location": "Search.I_visit_the_website_as_a_guest_user()"
});
formatter.result({
  "duration": 64200,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_select_the_books_option_from_the_dropdown()"
});
formatter.result({
  "duration": 72700,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_click_on_Search_icon()"
});
formatter.result({
  "duration": 85800,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_see_the_books_page_loaded()"
});
formatter.result({
  "duration": 74900,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_see_Books_at_Amazon_as_heading()"
});
formatter.result({
  "duration": 72500,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_not_see_other_category_products()"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Visiting the website as a guest user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I visit the website as a guest user",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.I_visit_the_website_as_a_guest_user()"
});
formatter.result({
  "duration": 101200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for the products under Baby category",
  "description": "",
  "id": "searching-of-various-categories-should-be-possible-along-with-product-search;search-for-the-products-under-baby-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Search"
    },
    {
      "line": 20,
      "name": "@Baby"
    },
    {
      "line": 20,
      "name": "@All"
    },
    {
      "line": 20,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I visit the website as a guest user",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I select the Baby option from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on Search icon",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the Baby page loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should see The baby store as heading",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should not see other category products",
  "keyword": "But "
});
formatter.match({
  "location": "Search.I_visit_the_website_as_a_guest_user()"
});
formatter.result({
  "duration": 59300,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_select_the_Baby_option_from_the_dropdown()"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_click_on_Search_icon()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_see_the_Baby_page_loaded()"
});
formatter.result({
  "duration": 657400,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_see_The_baby_store_as_heading()"
});
formatter.result({
  "duration": 78400,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_not_see_other_category_products()"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
});