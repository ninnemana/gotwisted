package main

import (
	"github.com/astaxie/beego"
	_ "github.com/ninnemana/twisted/routers"
	"os"
	"strconv"
)

func main() {
	if port, _ := strconv.Atoi(os.Getenv("PORT")); port > 0 {
		beego.HttpPort = port
	}
	beego.Run()
}
