import { Display } from "./display.js";

export class Ingredients {
  constructor() {
    this.getIngredientsData();
  }
  async getIngredientsData() {
    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );

    let response = await request.json();
    this.displayIngredientsResults(response.meals, "ingredient");
    $(".loading-main-section").removeClass("d-flex");
    $(".loading-main-section").addClass("d-none");
    //  $(".loading-main-section").fadeOut(300);
  }

  displayIngredientsResults(results, type) {
    let temp = "";
    if (type === "ingredient") {
      for (let i = 0; i < 20; i++) {
        temp += `
          <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="item text-center" id="${results[i].strIngredient}">
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3 class="mt-3">${results[i].strIngredient}</h3>
              <p>
                ${results[i].strDescription.split(" ").slice(0, 20).join(" ")}
              </p>
            </div>
          </div>`;
      }

      document.getElementById("main-section").innerHTML = temp;

      let allArea = document.querySelectorAll(".item");
      for (let i = 0; i < allArea.length; i++) {
        allArea[i].addEventListener("click", () => {
          this.filterByIngredients(allArea[i].id);
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

      let allIngredients = document.querySelectorAll(".item");
      for (let i = 0; i < allIngredients.length; i++) {
        allIngredients[i].addEventListener("click", () => {
          new Display(allIngredients[i].id);
        });
      }
    }
  }

  async filterByIngredients(ingredient) {
    let width = $("#sideNavContent").innerWidth();
    $(".sideNav").css("left", `-${width}px`);
    $("#open").css("display", "block");
    $("#close").css("display", "none");

    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    let response = await request.json();
    this.displayIngredientsResults(response.meals.slice(0, 20), "meals");
    $(".loading-main-section").removeClass("d-flex");
    $(".loading-main-section").addClass("d-none");
    //  $(".loading-main-section").fadeOut(300);
  }
}
