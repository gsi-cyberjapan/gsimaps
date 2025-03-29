Feature: 002 自分で作る色別標高図」の不具合

  Scenario: 「標高・土地の凹凸＞自分で作る色別標高図」を東西にスクロールしても色別標高図が正しく表示される。
    Given URL "/#3/50.847573/25.224609/&ls=std%7Crelief_free&blend=1&disp=01&lcd=relief_free&vs=c1g1j0h0k0l0u0t1z0r0s0m0f1&d=m&reliefdata=05G0000FFGAG0095FFG32G00EEFFG64G91FF00G1F4GFFFF00G5DA.8GFF8C00GGFF4400" が開かれている
    Then 選択中の地図に "自分で作る色別標高図" が含まれている
      * 1 秒待つ
      * 表示されているタイルがすべて読み込み済みになっている
    When 地図を 左 に 1000 px移動する
      * 4.0 秒待つ
    Then 表示されているタイルがすべて読み込み済みになっている
