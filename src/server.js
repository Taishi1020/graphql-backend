const { ApolloServer , gql}  =  require("apollo-server");

//Graphqlスキーマ定義
const typeDefs = gql`
   type Query {
     info: String
   }
`

//resolver関数
const resolvers = {
    Query: {
        info: () => "HackerNewsクローン"
    }
}

//インスタンスか
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server
.listen()
.then(({url}) => console.log(`${url}でサーバーを起動中・・・`))