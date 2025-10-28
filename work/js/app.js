// ★JSONファイルから商品データを取得して、HTMLの表<table>に行を追加する処理を行う★

// ページの読み込みが終わったら以下の処理を実行する「=>は矢印として理解する」
document.addEventListener('DOMContentLoaded',() =>

// product.jsonというJSONデータを取得しに行く「fetch()は非同期通信(Promise)を返す」
    fetch('data/product.json')

// 取得したデータをJavaScriptオブジェクトに変換する
        .then(response => response.json())

// JSONの中の各商品データを順番に処理する
        .then(data => data.forEach(product =>

// 商品の表を追加するテーブルを探す「.appenChild　→　作った<tr>をproductTableに追加する」
            document.getElementById('productTable').appendChild(

// 新しい行を作成し、セル内容をセットする
// document.createElement('tr') →　新しい <tr>（表の行）を作成
// Object.assign() →　その行にプロパティをまとめて設定できる
                Object.assign(document.createElement('tr'),{
                    // { innerHTML: '...' } の部分で、行の中に <td> をまとめて入れている
                    innerHTML: `<td>${product.id}</td><td>${product.name}</td><td>${product.price}</td><td>${product.description}</td>`
                })
            )
        )
    )

// 何か失敗したらエラーを表示する「コンソールに（エラー：〇〇）と表示される」
        .catch(error => console.error('エラー:', error))
);