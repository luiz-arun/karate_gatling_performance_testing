Feature: Test the managed investing user account

Background:
    * url 'https://staging-plusapi.moneylion.io'
    * def getAccountDetails = 'this:/userAccount.feature@GETaccountDetails'

  
  @ignore
  @GETaccountDetails
  Scenario: To get the managed investing account details
    Given path '/v1/accounts/' + userId
    When method GET


  @verifyAccountStatusSuccess
  Scenario: To verify user's investment account status is OPEN after successful creation
    * def userId = '62145cbeb782116e923e8379'

    Given call read(getAccountDetails)
    And match responseStatus == 200
    Then match response.status == "PLUS_API_SUCCESS"
    And match response.exception == "#null"
    And match response.accounts[0].accountInternalType == "INVESTMENT"
    And match response.accounts[0].accountStatus == "OPEN"
    * def driveWealthAccountId = response.accounts[0].driveWealthAccountId
    * def accountId = response.accounts[0].accountId