import {
  SiJupyter, SiHtml5, SiPython, SiJavascript, SiTypescript,
  SiKubernetes, SiReact, SiAmazonaws, SiGooglecloud, 
  SiDocker
} from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaJava, FaCode } from "react-icons/fa";
import {FaNode} from "react-icons/fa";
import {DiSpark} from "react-icons/di";


export function returnIcon(language: any) {
  if (RegExp("Jupyter").test(language)) {
    return SiJupyter;
  } else if (RegExp("Python").test(language)) {
    return SiPython;
  } else if (RegExp("HTML").test(language)) {
    return SiHtml5;
  } else if (RegExp("JavaScript").test(language)) {
    return SiJavascript;
  } else if (RegExp("TypeScript").test(language)) {
    return SiTypescript;
  } else if (RegExp("Java").test(language)) {
    return FaJava;
  } else if (RegExp("Ruby").test(language)){
    return DiRuby
  } else if (RegExp("Spark").test(language)){
    return DiSpark
  } else if (RegExp("React").test(language)){
    return SiReact
  } else if (RegExp("Amazon").test(language)){
    return SiAmazonaws
  } else if (RegExp("k8s").test(language) || RegExp("Kubernetes").test(language)){
    return SiKubernetes
  } else if (RegExp("GCP").test(language)){
    return SiGooglecloud
  } else if (RegExp("Node").test(language)){
    return FaNode
  } else if (RegExp("Docker").test(language)){
    return SiDocker
  }
  else {
    return FaCode;
  }
}