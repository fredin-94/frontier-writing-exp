'use strict';

const rankings = [

  '-1-','s2s','=3',':4','+5+','-6-','=7','8:'

];

module.exports.writeBook = async event => {
  
  const ranking = event.queryStringParameters.ranking; //to get this info we need to have added a query string to the end of the url with the name ranking
  const rankingImg = rankings[ranking >= rankings.length ? rankings.length-1 : rankings];

  return {
    statusCode: 200,
    headers: { //chang later to not allow everyone lol
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: rankingImg,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
