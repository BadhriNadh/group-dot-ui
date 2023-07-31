provider "google" {
  project = "group-dots"
  region  = "us-west2"
}

resource "google_container_cluster" "group-dots-ui" {
  name     = "group-dots-ui"
  location = "us-west2-a"

  node_pool {
    name               = "group"
    initial_node_count = 1

    node_config {
      machine_type = "e2-standard-2"
      disk_size_gb = 20
      image_type   = "COS_CONTAINERD"
    }
  }
}
