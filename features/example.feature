Feature: 地理院地図のテスト

  Scenario: Check the map should be displayed.
    When  I open the url "http://localhost:8080/"
    Then  I expect that the title is "（ページタイトル）"
    And   I expect the element "#map" is visible
    And   I expect the element ".gsi-mapmenu-container" is not visible

  Scenario: Check the map should be displayed.
    When  I click the element ".gsi-mapmenu-btn"
    Then  I expect the element ".gsi-mapmenu-container" is visible
