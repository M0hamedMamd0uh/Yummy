import { Display } from "./display.js";

export class Home {
  constructor() {
    this.getData();
  }

  async getData() {
    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    let response = await request.json();

    this.displayData(response.meals.slice(0, 20));

    // $(".loading-main-section").fadeOut(300);
    $(".loading-main-section").removeClass("d-flex");
    $(".loading-main-section").addClass("d-none");
  }

  displayData(results) {
    let temp = "";
    for (let i = 0; i < results.length; i++) {
      temp += `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="item" id="${results[i].idMeal}">
              <div class="image-box">
                <img
                  src=${results[i].strMealThumb}
                  class="w-100"
                  alt=""
                />
                <div>
                  <h3>${results[i].strMeal}</h3>
                </div>
              </div>
            </div>
          </div>`;
    }

    document.getElementById("main-section").innerHTML = temp;

    let allCategories = document.querySelectorAll(".item");
    for (let i = 0; i < allCategories.length; i++) {
      allCategories[i].addEventListener("click", () => {
        new Display(allCategories[i].id);
      });
    }
  }
}
