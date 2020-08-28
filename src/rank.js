function voyageRisk (voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function judgeVoyageZoneIsChinaAndHasChina(result, history, voyage) {
  result += 3;
  if (history.length > 10) {
    result += 1;
  }
  if (voyage.length > 12) {
    result += 1;
  }
  if (voyage.length > 18) {
    result -= 1;
  }
  return result;
}

function judgeVoyageZoneIsNotChinaOrHasChina(history, result, voyage) {
  if (history.length > 8) {
    result += 1;
  }
  if (voyage.length > 14) {
    result -= 1;
  }
  return result;
}

function handleVoyageAndHistory(voyage, history, result) {
  if (voyage.zone === 'china' && hasChina(history)) {
    result = judgeVoyageZoneIsChinaAndHasChina(result, history, voyage);
  } else {
    result = judgeVoyageZoneIsNotChinaOrHasChina(history, result, voyage);
  }
  return result;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }
  result = handleVoyageAndHistory(voyage, history, result);
  return result;
}

function rating (voyage, history) {
  return voyageProfitFactor(voyage, history) * 3 > (voyageRisk(voyage) + captainHistoryRisk(voyage, history) * 2) ? 'A' : 'B';
}

module.exports = {
  rating
};