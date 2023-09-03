import { Display } from "./display.js";

export class Area {
  constructor() {
    this.getAreaData();
  }
  async getAreaData() {
    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );

    let response = await request.json();
    this.displayAreaResults(response.meals, "area");
    $(".loading-main-section").removeClass("d-flex");
    $(".loading-main-section").addClass("d-none");
    //  $(".loading-main-section").fadeOut(300);
  }

  displayAreaResults(results, type) {
    let temp = "";
    if (type === "area") {
      for (let i = 0; i < results.length; i++) {
        temp += `
            <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="item text-center" id="${results[i].strArea}">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3 class="mt-3">${results[i].strArea}</h3>
            </div>
          </div>`;
      }

      document.getElementById("main-section").innerHTML = temp;

      let allArea = document.querySelectorAll(".item");
      for (let i = 0; i < allArea.length; i++) {
        allArea[i].addEventListener("click", () => {
          this.filterByArea(allArea[i].id);
        });
      }
    } else if (type === "meals") {
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
                <div class="flex-column">
                  <h3>${results[i].strMeal}</h3>
                </div>
              </div>
            </div>
          </div>`;
      }

      document.getElementById("main-section").innerHTML = temp;

      let allArea = document.querySelectorAll(".item");
      for (let i = 0; i < allArea.length; i++) {
        allArea[i].addEventListener("click", () => {
          new Display(allArea[i].id);
        });
      }
    }
  }

  async filterByArea(area) {
    let width = $("#sideNavContent").innerWidth();
    $(".sideNav").css("left", `-${width}px`);
    $("#open").css("display", "block");
    $("#close").css("display", "none");

    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );

    let response = await request.json();

    this.displayAreaResults(response.meals.slice(0, 20), "meals");
    $(".loading-main-section").removeClass("d-flex");
    $(".loading-main-section").addClass("d-none");
    //  $(".loading-main-section").fadeOut(300);
  }
}
