package routers

import (
	"github.com/ninnemana/twisted/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
}
