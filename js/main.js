import { Search } from "./search.js";
import { Categories } from "./categories.js";
import { Area } from "./area.js";
import { Ingredients } from "./ingredients.js";
import { Contact } from "./contact.js";
import { Home } from "./home.js";

$(function () {
  // for spinner loading
  $(".sk-chase").fadeOut(500, function () {
    $(".loading").fadeOut(1000);
    $("body").css("overflow", "auto");
    $(".sideNav ").css("z-index", "9999999999");

    // for make Home page wait until loading is finish and then show inner loading then display Home page
    new Home();
  });

  // Start Navbar
  let width = $("#sideNavContent").innerWidth();
  $(".sideNav").css("left", `-${width}px`);
  $("#close").css("display", "none");

  $("#open").click(function () {
    $(".sideNav").css("left", `0px`);
    $("#open").css("display", "none");
    $("#close").css("display", "block");

    // for make links display in sequence not at same time
    let elements = $("#links li");
    let timer = 100;
    for (let i = 0; i < elements.length; i++) {
      $(elements[i]).animate({ bottom: 0 }, 600 + timer);
      timer += 100;
    }
  });

  $("#close").click(function () {
    let width = $("#sideNavContent").innerWidth();
    $(".sideNav").css("left", `-${width}px`);
    $("#open").css("display", "block");
    $("#close").css("display", "none");
    $("#links li").animate({ bottom: "-100%" }, 300);
  });

  // links
  $("#links li").click(function () {
    document.getElementById("main-section").innerHTML = "";

    if (this.id === "search") {
      $("#searchInput").removeClass("d-none");
      $(".sideNav").css("left", `-${width}px`);
      $("#close").css("display", "none");
      $("#open").css("display", "block");
      new Search();
    } else if (this.id === "categories") {
      $("#searchInput").addClass("d-none");
      $(".sideNav").css("left", `-${width}px`);
      $("#close").css("display", "none");
      $("#open").css("display", "block");
      new Categories();
    } else if (this.id === "area") {
      $("#searchInput").addClass("d-none");
      $(".sideNav").css("left", `-${width}px`);
      $("#close").css("display", "none");
      $("#open").css("display", "block");
      new Area();
    } else if (this.id === "ingredients") {
      $("#searchInput").addClass("d-none");
      $(".sideNav").css("left", `-${width}px`);
      $("#close").css("display", "none");
      $("#open").css("display", "block");
      new Ingredients();
    } else if (this.id === "contact") {
      $("#searchInput").addClass("d-none");
      $(".sideNav").css("left", `-${width}px`);
      $("#close").css("display", "none");
      $("#open").css("display", "block");
      new Contact();
    }
  });

  // End Navbar
});
