import { Display } from "./display.js";

export class Search {
  constructor() {
    this.getInputData();
  }
  getInputData() {
    let searchName = document.getElementById("searchName");
    let searchLetter = document.getElementById("searchLetter");

    searchName.onfocus = () => {
      let width = $("#sideNavContent").innerWidth();
      $(".sideNav").css("left", `-${width}px`);
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    };

    searchName.oninput = () => {
      $("#searchLetter").val("");
      this.getSearchData(searchName.value, "name");
    };

    searchLetter.onfocus = () => {
      let width = $("#sideNavContent").innerWidth();
      $(".sideNav").css("left", `-${width}px`);
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    };
    searchLetter.oninput = () => {
      $("#searchName").val("");

      if (searchLetter.value === "") return;
      else this.getSearchData(searchLetter.value, "letter");
    };
  }

  async getSearchData(searchKey, type) {
    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = "";
    if (type === "name") {
      request = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKey}`
      );
    } else if (type === "letter") {
      request = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchKey}`
      );
    }

    let response = await request.json();

    // $(".loading-main-section").fadeOut(300);
    if (response.meals !== null) {
      this.displaySearchResults(response.meals.slice(0, 20));

      $(".loading-main-section").removeClass("d-flex");
      $(".loading-main-section").addClass("d-none");
    } else {
      document.getElementById("main-section").innerHTML = "";

      $(".loading-main-section").removeClass("d-flex");
      $(".loading-main-section").addClass("d-none");

      return;
    }
  }

  displaySearchResults(results) {
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
