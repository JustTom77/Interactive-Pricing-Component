const inputRange = document.getElementById("myRange");
const output = document.getElementById("price");
const views = document.getElementById("views");
const slideBar = document.getElementById("slide-bar");
const subscriptionBtn = document.getElementById("btn-container");
const slideContainer = document.getElementById("slide-icon");

let price1 = 8;
let price2 = 12;
let price3 = 16;
let price4 = 24;
let price5 = 36;

let prices = [8.0, 12.0, 16.0, 24.0, 36.0];
let ranges = ["0%", "23.2%", "46.4%", "69.5%", "92.6%"];
let rangesMobile = ["0%", "21.8%", "43.7%", "65.5%", "86.5%"];
let viewsCounts = ["10K", "50K", "100K", "500K", "1M"];
let discountedPrices = [];

output.innerHTML = prices[2];

function fillRangeAndDisplayViews(range, viewer) {
  views.innerHTML = `${viewer} Pageviews`;
  slideBar.style.width = `${range}`;
}

function discountPrice() {
  prices.forEach(price => {
    let discount = price * 0.75;
    discountedPrices.push(discount);
  });

  return;
}

function displayDiscountPrice() {
  let value = inputRange.value;
  switch (value) {
    case 0:
      output.innerHTML = `$${discountedPrices[0]}.00`;
      break;
    case 25:
      output.innerHTML = `$${discountedPrices[1]}.00`;
      break;
    case 50:
      output.innerHTML = `$${discountedPrices[2]}.00`;
      break;
    case 75:
      output.innerHTML = `$${discountedPrices[3]}.00`;
      break;
    case 100:
      output.innerHTML = `$${discountedPrices[4]}.00`;
      break;
    default:
      output.innerHTML = `$${discountedPrices[2]}.00`;
  }
}

function displayRegularPrice() {
  let value = inputRange.value;
  switch (value) {
    case 0:
      output.innerHTML = `$${prices[0]}.00`;
      break;
    case 25:
      output.innerHTML = `$${prices[1]}.00`;
      break;
    case 50:
      output.innerHTML = `$${prices[2]}.00`;
      break;
    case 75:
      output.innerHTML = `$${prices[3]}.00`;
      break;
    case 100:
      output.innerHTML = `$${prices[4]}.00`;
      break;
    default:
      output.innerHTML = `$${prices[2]}.00`;
  }
}

subscriptionBtn.addEventListener("click", () => {
  if (subscriptionBtn.classList.contains("btn-container")) {
    discountPrice();
    displayDiscountPrice();
    subscriptionBtn.classList.remove("btn-container");
    subscriptionBtn.classList.add("btn-container-active");
    subscriptionBtn.style.backgroundColor = "hsl(174, 77%, 80%)";
  } else if (subscriptionBtn.classList.contains("btn-container-active")) {
    displayRegularPrice();
    subscriptionBtn.classList.add("btn-container");
    subscriptionBtn.classList.remove("btn-container-active");
    subscriptionBtn.style.backgroundColor = "#d4d2d2";
  }
});

output.innerHTML = `$${prices[2]}.00`;

if (window.innerWidth == 375) {
  slideBar.style.width = rangesMobile[2];
} else {
  slideBar.style.width = ranges[2];
}

inputRange.oninput = e => {
  let pricing = e.target.value;

  if (pricing <= 0) {
    output.innerHTML = subscriptionBtn.classList.contains(
      "btn-container-active"
    )
      ? (output.innerHTML = `$${(price1 / 100) * 75}.00`)
      : (output.innerHTML = `$${price1}.00`);
    if (window.innerWidth == 375) {
      fillRangeAndDisplayViews(rangesMobile[0], viewsCounts[0]);
    } else {
      fillRangeAndDisplayViews(ranges[0], viewsCounts[0]);
    }
  } else if (pricing > 24 && pricing < 26) {
    output.innerHTML = subscriptionBtn.classList.contains(
      "btn-container-active"
    )
      ? (output.innerHTML = `$${(price2 / 100) * 75}.00`)
      : (output.innerHTML = `$${price2}.00`);
    if (window.innerWidth == 375) {
      fillRangeAndDisplayViews(rangesMobile[1], viewsCounts[1]);
    } else {
      fillRangeAndDisplayViews(ranges[1], viewsCounts[1]);
    }
  } else if (pricing > 49 && pricing < 51) {
    output.innerHTML = subscriptionBtn.classList.contains(
      "btn-container-active"
    )
      ? (output.innerHTML = `$${(price3 / 100) * 75}.00`)
      : (output.innerHTML = `$${price3}.00`);
    if (window.innerWidth == 375) {
      fillRangeAndDisplayViews(rangesMobile[2], viewsCounts[2]);
    } else {
      fillRangeAndDisplayViews(ranges[2], viewsCounts[2]);
    }
  } else if (pricing > 74 && pricing < 76) {
    output.innerHTML = subscriptionBtn.classList.contains(
      "btn-container-active"
    )
      ? (output.innerHTML = `$${(price4 / 100) * 75}.00`)
      : (output.innerHTML = `$${price4}.00`);
    if (window.innerWidth == 375) {
      fillRangeAndDisplayViews(rangesMobile[3], viewsCounts[3]);
    } else {
      fillRangeAndDisplayViews(ranges[3], viewsCounts[3]);
    }
  } else if (pricing >= 100) {
    output.innerHTML = subscriptionBtn.classList.contains(
      "btn-container-active"
    )
      ? (output.innerHTML = `$${(price5 / 100) * 75}.00`)
      : (output.innerHTML = `$${price5}.00`);
    if (window.innerWidth == 375) {
      fillRangeAndDisplayViews(rangesMobile[4], viewsCounts[4]);
    } else {
      fillRangeAndDisplayViews(ranges[4], viewsCounts[4]);
    }
  }
};
