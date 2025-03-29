# 全国Q地図（qchizu）運用マニュアル

このマニュアルは、[gsimaps](https://github.com/gsi-cyberjapan/gsimaps)をフォークして作成された[全国Q地図（qchizu）](https://github.com/qchizu/qchizu)の運用手順をまとめたものです。

## 目次

1. [初期設定](#初期設定)
2. [qchizu独自開発の手順](#qchizu独自開発の手順)
3. [gsimapsの更新取り込み手順](#gsimapsの更新取り込み手順)
4. [共通ルール](#共通ルール)

## 初期設定

### GitHubアカウント作成とリポジトリのフォーク

1. GitHubアカウントを作成していない場合は、[GitHub](https://github.com/)で作成します。
2. [gsimaps](https://github.com/gsi-cyberjapan/gsimaps)リポジトリにアクセスします。
3. 右上の「Fork」ボタンをクリックして、自分のアカウントにフォークします。
4. フォークしたリポジトリ名を「qchizu」に変更します（Settings > Repository name）。

### ローカル環境の設定

1. ローカルPCにGitをインストールします。
2. フォークしたリポジトリをクローンします：

```bash
git clone https://github.com/qchizu/qchizu.git
cd qchizu
```

3. リモートリポジトリの設定を行います：

```bash
# フォーク元（upstream）の設定
git remote add upstream https://github.com/gsi-cyberjapan/gsimaps.git
# リモート情報の確認
git remote -v
```

4. `gh-pages`ブランチがデフォルトブランチであることを確認します：

```bash
git branch
```

### GitHub Pagesの設定

1. リポジトリの「Settings」タブに移動します。
2. 左側のメニューから「Pages」を選択します。
3. 「Build and deployment」セクションで「gh-pages」ブランチが選択されていることを確認します。

## qchizu独自開発の手順

### 1. 開発用ブランチの作成

新機能開発やバグ修正を行う際は、必ず新しいブランチを作成します。ブランチ名の命名規則は以下の通りです：

- 新機能開発：`feature/機能名`（例：`feature/add-new-layer`）
- バグ修正：`fix/修正内容`（例：`fix/layer-display-issue`）
- ドキュメント更新：`docs/更新内容`（例：`docs/update-readme`）

```bash
# 最新のgh-pagesブランチに切り替え
git checkout gh-pages
git pull

# 新しいブランチを作成して切り替え
git checkout -b feature/機能名
```

### 2. 開発作業

必要な変更を行います。変更は小さな単位で行い、こまめにコミットすることを推奨します。

### 3. 変更のコミット

```bash
# 変更ファイルの確認
git status

# 変更ファイルをステージングに追加
git add .
# または特定のファイルのみ追加
git add ファイル名

# コミット
git commit -m "コミットメッセージ"
```

**コミットメッセージの書き方：**

コミットメッセージは以下の形式で記述します：

```
[カテゴリ] 変更内容の要約（50文字以内）

変更内容の詳細説明（必要な場合）
```

カテゴリの例：
- `[ADD]` - 新機能・ファイルの追加
- `[FIX]` - バグ修正
- `[UPDATE]` - 既存機能の更新・改善
- `[REMOVE]` - 機能・ファイルの削除
- `[REFACTOR]` - リファクタリング（機能変更なし）
- `[DOC]` - ドキュメント関連の変更

例：
```
[ADD] レイヤー追加

国土数値情報を利用したレイヤーを追加するもの。
- XXXレイヤー
- YYYレイヤー
```

### 4. リモートリポジトリへのプッシュ

```bash
git push origin feature/機能名
```

### 5. プルリクエストの作成

1. GitHubのリポジトリページにアクセスします。
2. 「Pull requests」タブをクリックし、「New pull request」ボタンをクリックします。
3. ベースブランチ（`gh-pages`）と比較ブランチ（`feature/機能名`）を選択します。
4. 「Create pull request」ボタンをクリックします。
5. タイトルと説明を入力します。
   - タイトル形式：`[カテゴリ] 変更内容の要約`
   - 説明：変更内容の詳細、関連する課題がある場合はその参照など
6. 「Create pull request」ボタンをクリックして作成します。

### 6. プルリクエストのマージ

変更内容を最終確認してからマージします。

1. プルリクエストページで「Merge pull request」ボタンをクリックします。
2. マージ方法を選択します（通常は「Create a merge commit」）。
3. 「Confirm merge」ボタンをクリックします。
4. マージ完了後、開発ブランチは削除します。

```bash
# ローカルのgh-pagesブランチを更新
git checkout gh-pages
git pull
```

## gsimapsの更新取り込み手順

上流リポジトリ（gsimaps）の更新を定期的に取り込むことで、最新の機能やバグ修正を反映します。

### 1. 更新取り込み用ブランチの作成

```bash
# 最新のgh-pagesブランチに切り替え
git checkout gh-pages
git pull

# 更新取り込み用ブランチを作成
git checkout -b update/upstream-日付
# 例: git checkout -b update/upstream-20250329
```

### 2. フォーク元の最新変更を取得

```bash
# フォーク元（upstream）の最新情報を取得
git fetch upstream

# フォーク元のgh-pagesブランチの変更を取り込む
git merge upstream/gh-pages
```

### 3. コンフリクト解決

コンフリクトが発生した場合は解決します。

また、qchizuで不要な以下のファイルを削除します。

- .githubディレクトリ
- layers_txt内のgsimaps由来のテキスト（anchor.txt、layers.txt、layers0.txt、layers1.txt以外）

```bash
# コンフリクトしているファイルを確認
git status

# コンフリクトを解決した後、ファイルを追加
git add 解決したファイル

# マージを続行
git commit
```

### 4. リモートリポジトリへのプッシュ

```bash
git push origin update/upstream-日付
```

### 5. プルリクエストの作成

1. GitHubのリポジトリページにアクセスします。
2. 「Pull requests」タブをクリックし、「New pull request」ボタンをクリックします。
3. ベースブランチ（`gh-pages`）と比較ブランチ（`update/upstream-日付`）を選択します。
4. 「Create pull request」ボタンをクリックします。
5. タイトルと説明を入力します。
   - タイトル形式：`[UPDATE] gsimapsの更新を取り込み（日付）`
   - 説明：取り込んだ主な変更点など
6. 「Create pull request」ボタンをクリックして作成します。

### 6. プルリクエストのマージ

1. プルリクエストページで「Merge pull request」ボタンをクリックします。
2. 「Confirm merge」ボタンをクリックします。
3. マージ完了後、ブランチは削除します。

```bash
# ローカルのgh-pagesブランチを更新
git checkout gh-pages
git pull
```

## 共通ルール

### ブランチ管理

- `gh-pages`ブランチは常に安定した状態を維持します。
- `gh-pages`ブランチには直接コミットせず、必ずプルリクエスト経由で変更を反映させます。
- 開発用ブランチは目的に応じた命名規則に従って作成します。
- 不要になったブランチは適宜削除します。

### コミットメッセージ

- コミットメッセージは「[カテゴリ] 変更内容」の形式で記述します。
- 詳細な説明が必要な場合は、1行空けて記述します。
- 日本語で記述します。

### 定期的なメンテナンス

- フォーク元の更新取り込みは、最低でも月1回程度を目安に実施します。
- リポジトリのIssuesは定期的に確認し、必要に応じて対応します。

### ドキュメント管理

- READMEやドキュメントは最新の状態を維持します。
- 機能追加や変更を行った場合は、関連するドキュメントも更新します。
