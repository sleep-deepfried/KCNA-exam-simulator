// KCNA Exam Set 2 - All 51 Questions
// Extracted from kcna-exam-set2.md

export const examSet2Questions = [
  {
    id: 1,
    questionNumber: 127,
    topic: "CI/CD",
    question: "What does \"Continuous Integration\" mean?",
    options: [
      "The continuous integration and testing of code changes from multiple sources manually.",
      "The continuous integration and testing of code changes from multiple sources via automation.",
      "The continuous integration of changes from one environment to another.",
      "The continuous integration of new tools to support developers in a project."
    ],
    correct: 1,
    explanation: "Continuous Integration (CI) is a software development practice where developers frequently integrate their code changes into a shared repository, typically multiple times a day. Each integration is automatically verified by running automated tests and builds."
  },
  {
    id: 2,
    questionNumber: 130,
    topic: "Kubernetes Networking",
    question: "The IPv4/IPv6 dual stack in Kubernetes:",
    options: [
      "Translates an IPv4 request from a service to an IPv6 service.",
      "Allows you to access the IPv4 address by using the IPv6 address.",
      "Requires NetworkPolicies to prevent services from mixing requests.",
      "Allows you to create IPv4 and IPv6 dual stack services."
    ],
    correct: 3,
    explanation: "The IPv4/IPv6 dual stack feature in Kubernetes allows you to create services that can have both IPv4 and IPv6 addresses. This enables your Kubernetes Pods and Services to communicate over both network protocols."
  },
  {
    id: 3,
    questionNumber: 132,
    topic: "Kubernetes Storage",
    question: "What is ephemeral storage?",
    options: [
      "Storage space that need not persist across restarts.",
      "Storage that may grow dynamically.",
      "Storage used by multiple consumers (e.g. multiple Pods).",
      "Storage that is always provisioned locally"
    ],
    correct: 0,
    explanation: "Ephemeral storage refers to temporary storage that is used by containers and does not need to persist across restarts or reboots. This type of storage is typically used for transient data that is only needed for the duration of the container's lifecycle."
  },
  {
    id: 4,
    questionNumber: 59,
    topic: "Kubernetes API",
    question: "Services and Pods in Kubernetes are ____ objects.",
    options: [
      "JSON",
      "YAML",
      "Java",
      "REST"
    ],
    correct: 3,
    explanation: "In Kubernetes, resources such as Services and Pods are represented as RESTful objects. This means that they can be accessed and manipulated using HTTP methods like GET, POST, PUT, and DELETE via the Kubernetes API server."
  },
  {
    id: 5,
    questionNumber: 60,
    topic: "Kubernetes Networking",
    question: "What Kubernetes component handles network communications inside and outside of a cluster, using operating system packet filtering if available?",
    options: [
      "kube-proxy",
      "kubelet",
      "etcd",
      "kube-controller-manager"
    ],
    correct: 0,
    explanation: "kube-proxy is the Kubernetes component responsible for handling network communications inside and outside of a cluster. It maintains network rules on each node, which allow network traffic to be properly routed to and from the Pods."
  },
  {
    id: 6,
    questionNumber: 63,
    topic: "Kubectl Commands",
    question: "Which of these commands is used to retrieve the documentation and field definitions for a Kubernetes resource?",
    options: [
      "kubectl explain",
      "kubectl api-resources",
      "kubectl get --help",
      "kubectl show"
    ],
    correct: 0,
    explanation: "The kubectl explain command is used to provide detailed information about the fields of Kubernetes objects, including their specifications. It helps users understand the structure and usage of resources."
  },
  {
    id: 7,
    questionNumber: 64,
    topic: "Service Mesh",
    question: "Which of the following is a lightweight tool that manages traffic flows between services, enforces access policies, and aggregates telemetry data, all without requiring changes to application code?",
    options: [
      "NetworkPolicy",
      "Linkerd",
      "kube-proxy",
      "Nginx"
    ],
    correct: 1,
    explanation: "Linkerd is a popular service mesh that is designed to be lightweight and performant. Service meshes manage traffic flows between services, enforce access policies, and aggregate telemetry data by injecting sidecar proxies next to application containers."
  },
  {
    id: 8,
    questionNumber: 65,
    topic: "Kubernetes Configuration",
    question: "Which Kubernetes resource uses `immutable: true` boolean field?",
    options: [
      "Deployment",
      "Pod",
      "ConfigMap",
      "ReplicaSet"
    ],
    correct: 2,
    explanation: "The ConfigMap resource (and Secret resources) in Kubernetes can use the immutable: true boolean field. When set to true, this field ensures that the data within the ConfigMap cannot be updated after the resource is created."
  },
  {
    id: 9,
    questionNumber: 66,
    topic: "Kubernetes Networking",
    question: "Which statement about the Kubernetes network model is correct?",
    options: [
      "Pods can only communicate with Pods exposed via a Service.",
      "Pods can communicate with all Pods without NAT.",
      "The Pod IP is only visible inside a Pod.",
      "The Service IP is used for the communication between Services."
    ],
    correct: 1,
    explanation: "In the Kubernetes network model, each Pod has a unique IP address, and Pods can communicate with all other Pods directly without needing Network Address Translation (NAT). This principle ensures a flat network topology."
  },
  {
    id: 10,
    questionNumber: 67,
    topic: "Kubernetes Fundamentals",
    question: "What is the resource type used to package sets of containers for scheduling in a cluster?",
    options: [
      "Pod",
      "ContainerSet",
      "ReplicaSet",
      "Deployment"
    ],
    correct: 0,
    explanation: "A Pod is the smallest and simplest deployable unit in the Kubernetes object model. It represents a single instance of a running process in your cluster and can contain one or more tightly coupled containers."
  },
  {
    id: 11,
    questionNumber: 68,
    topic: "Kubernetes Services",
    question: "Can a Kubernetes Service expose multiple ports?",
    options: [
      "No, you can only expose one port per each Service.",
      "Yes, but you must specify an unambiguous name for each port.",
      "Yes, the only requirement is to use different port numbers.",
      "No, because the only port you can expose is port number 443."
    ],
    correct: 1,
    explanation: "A Kubernetes Service can expose multiple ports. When defining a Service with multiple ports, it is a requirement to assign a unique and unambiguous name for each port within the spec.ports array."
  },
  {
    id: 12,
    questionNumber: 69,
    topic: "SRE",
    question: "Which persona is normally responsible for defining, testing, and running an incident management process?",
    options: [
      "Site Reliability Engineers",
      "Project Managers",
      "Application Developers",
      "Quality Engineers"
    ],
    correct: 0,
    explanation: "Site Reliability Engineers (SREs) are typically responsible for defining, testing, and running incident management processes. Their role is to ensure the reliability and performance of systems."
  },
  {
    id: 13,
    questionNumber: 71,
    topic: "Kubectl Commands",
    question: "Which command provides information about the field `replicas` within the `spec` resource of a `deployment` object?",
    options: [
      "kubectl get deployment.spec.replicas",
      "kubectl explain deployment.spec.replicas",
      "kubectl describe deployment.spec.replicas",
      "kubectl explain deployment --spec.replicas"
    ],
    correct: 1,
    explanation: "The kubectl explain command is used to provide detailed documentation and field definitions for Kubernetes resources and their nested fields. To get information about the replicas field within the spec of a deployment object, the correct command is kubectl explain deployment.spec.replicas."
  },
  {
    id: 14,
    questionNumber: 72,
    topic: "Open Source Governance",
    question: "Which of the following is a responsibility of the governance board of an open source project?",
    options: [
      "Decide about the marketing strategy of the project.",
      "Review the pull requests in the main branch.",
      "Outline the project's \"terms of engagement\".",
      "Define the license to be used in the project."
    ],
    correct: 2,
    explanation: "The governance board of an open source project is responsible for outlining the project's 'terms of engagement.' This includes defining the rules, guidelines, and processes for how contributors and maintainers interact with the project."
  },
  {
    id: 15,
    questionNumber: 73,
    topic: "Kubernetes Networking",
    question: "What is the role of a NetworkPolicy in Kubernetes?",
    options: [
      "The ability to cryptic and obscure all traffic.",
      "The ability to classify the Pods as isolated and non isolated.",
      "The ability to prevent loopback or incoming host traffic.",
      "The ability to log network security events."
    ],
    correct: 1,
    explanation: "A NetworkPolicy in Kubernetes is a resource that defines rules for controlling the network traffic to and from Pods. When a NetworkPolicy is applied, it can classify Pods as 'isolated,' meaning they only accept traffic that matches the specified rules."
  },
  {
    id: 16,
    questionNumber: 74,
    topic: "etcd Performance",
    question: "What are the most important resources to guarantee the performance of an etcd cluster?",
    options: [
      "CPU and disk capacity.",
      "Network throughput and disk I/O.",
      "CPU and RAM memory.",
      "Network throughput and CPU."
    ],
    correct: 1,
    explanation: "The most important resources to guarantee the performance of an etcd cluster are network throughput and disk I/O. etcd is a distributed key-value store that needs fast and reliable communication between its nodes and efficient read/write operations to its storage."
  },
  {
    id: 17,
    questionNumber: 75,
    topic: "Kubernetes Deployment",
    question: "How do you deploy a workload to Kubernetes without additional tools?",
    options: [
      "Create a Bash script and run it on a worker node.",
      "Create a Helm Chart and install it with helm.",
      "Create a manifest and apply it with kubectl.",
      "Create a Python script and run it with kubectl."
    ],
    correct: 2,
    explanation: "To deploy a workload to Kubernetes without additional tools, you create a manifest file (typically in YAML format) that defines the desired state of your Kubernetes resources and then apply this manifest using the kubectl apply command."
  },
  {
    id: 18,
    questionNumber: 76,
    topic: "Kubectl Commands",
    question: "How do you perform a command in a running container of a Pod?",
    options: [
      "kubectl exec",
      "docker exec",
      "kubectl run",
      "kubectl attach -i"
    ],
    correct: 0,
    explanation: "The kubectl exec command is used to execute a command in a running container of a Pod. For example, kubectl exec -it <pod-name> -- bash will open a bash shell inside the specified Pod's container."
  },
  {
    id: 19,
    questionNumber: 77,
    topic: "Kubernetes Services",
    question: "How to create a headless service?",
    options: [
      "By specifying .spec.ClusterIP: headless",
      "By specifying .spec.clusterIP: None",
      "By specifying .spec.ClusterIP: 0.0.0.0",
      "By specifying .spec.ClusterIP: localhost"
    ],
    correct: 1,
    explanation: "To create a Headless Service in Kubernetes, you need to specify .spec.clusterIP: None in the Service manifest. This configuration tells Kubernetes not to assign a ClusterIP to the service."
  },
  {
    id: 20,
    questionNumber: 78,
    topic: "Storage Provisioning",
    question: "How does dynamic storage provisioning work?",
    options: [
      "A user requests dynamically provisioned storage by including an existing storage class in their PersistentVolumeClaim.",
      "An administrator creates a storage class and includes it in their pod YAML definition file without creating a PersistentVolumeClaim.",
      "A pod requests dynamically provisioned storage by including a storage class and the pod name in their PersistentVolumeClaim.",
      "An administrator creates a PersistentVolume and includes the name of the PersistentVolume in their pod YAML definition file."
    ],
    correct: 0,
    explanation: "Dynamic storage provisioning in Kubernetes works by allowing users to request storage without needing to pre-provision PersistentVolume objects. A user creates a PersistentVolumeClaim (PVC) and specifies a StorageClass in it."
  },
  {
    id: 21,
    questionNumber: 79,
    topic: "Container Orchestration",
    question: "Which of the following are tasks performed by a container orchestration tool?",
    options: [
      "Schedule, scale, and manage the health of containers.",
      "Create images, scale, and manage the health of containers.",
      "Debug applications, and manage the health of containers.",
      "Store images, scale, and manage the health of containers."
    ],
    correct: 0,
    explanation: "Container orchestration tools, such as Kubernetes, are responsible for scheduling (placing containers on appropriate nodes), scaling (adjusting the number of container instances), and managing health (monitoring containers and restarting them if they fail)."
  },
  {
    id: 22,
    questionNumber: 81,
    topic: "Kubernetes Services",
    question: "What is a Kubernetes Service Endpoint?",
    options: [
      "It is the API Endpoint of our Kubernetes cluster.",
      "It is a name of special Pod in kube-system namespace.",
      "It is an IP address that we can access from the Internet.",
      "It is an object that gets IP addresses of individual Pods assigned to it."
    ],
    correct: 3,
    explanation: "A Kubernetes Service Endpoint is a resource that provides the actual IP addresses and ports of the Pods that are backing a Service. Endpoint objects are dynamically created and updated by Kubernetes to reflect the current state of the Pods."
  },
  {
    id: 23,
    questionNumber: 83,
    topic: "Kubernetes Fundamentals",
    question: "Which Kubernetes component is the smallest deployable unit of computing?",
    options: [
      "StatefulSet",
      "Deployment",
      "Pod",
      "Container"
    ],
    correct: 2,
    explanation: "In Kubernetes, the Pod is the smallest deployable unit of computing. A Pod can contain one or more containers, but it is the fundamental unit that Kubernetes deploys, manages, and scales."
  },
  {
    id: 24,
    questionNumber: 84,
    topic: "Kubectl Commands",
    question: "What kubectl command is used to retrieve the resource consumption (CPU and memory) for nodes or Pods?",
    options: [
      "kubectl cluster-info",
      "kubectl version",
      "kubectl top",
      "kubectl api-resources"
    ],
    correct: 2,
    explanation: "The kubectl top command is used to retrieve the resource consumption (CPU and memory) for nodes or Pods in a Kubernetes cluster. This command requires the Metrics Server to be deployed in the cluster."
  },
  {
    id: 25,
    questionNumber: 86,
    topic: "Security",
    question: "Which of the following capabilities are you allowed to add to a container using the Restricted policy?",
    options: [
      "CHOWN",
      "SYS_CHROOT",
      "SETUID",
      "NET_BIND_SERVICE"
    ],
    correct: 3,
    explanation: "The Restricted Pod Security Standard in Kubernetes allows the addition of the NET_BIND_SERVICE capability. This capability is often needed for containers to bind to network ports below 1024, which are considered privileged."
  },
  {
    id: 26,
    questionNumber: 87,
    topic: "Kubernetes Scaling",
    question: "What methods can you use to scale a deployment?",
    options: [
      "With kubectl edit deployment exclusively.",
      "With kubectl scale-up deployment exclusively.",
      "With kubectl scale deployment and kubectl edit deployment.",
      "With kubectl scale deployment exclusively."
    ],
    correct: 2,
    explanation: "You can scale a Kubernetes Deployment using either kubectl scale deployment or kubectl edit deployment. Both methods effectively achieve the same result by adjusting the number of running instances (replicas) of your application."
  },
  {
    id: 27,
    questionNumber: 89,
    topic: "Container Runtime",
    question: "Which is an industry-standard container runtime with an \"emphasis\" on simplicity, robustness, and portability?",
    options: [
      "cri-o",
      "lxd",
      "containerd",
      "kata-runtime"
    ],
    correct: 2,
    explanation: "containerd is an industry-standard container runtime that emphasizes simplicity, robustness, and portability. It originated as a core component of Docker and is now a standalone project used by Kubernetes as a container runtime."
  },
  {
    id: 28,
    questionNumber: 90,
    topic: "Scaling",
    question: "What does vertical scaling an application deployment describe best?",
    options: [
      "The act of adding/removing applications to meet demand.",
      "The act of adding/removing node instances to the cluster to meet demand.",
      "The act of adding/removing resources to applications to meet demand.",
      "The act of adding/removing application instances of the same application to meet demand."
    ],
    correct: 2,
    explanation: "Vertical scaling an application deployment describes the act of adding or removing resources (such as CPU, memory, or storage) to a single instance of an application to meet demand."
  },
  {
    id: 29,
    questionNumber: 92,
    topic: "Serverless Computing",
    question: "What is Serverless computing?",
    options: [
      "A computing method of providing backend services on an as-used basis.",
      "A computing method of providing services for AI and ML operating systems.",
      "A computing method of providing services for quantum computing operating systems.",
      "A computing method of providing services for cloud computing operating systems."
    ],
    correct: 0,
    explanation: "Serverless computing is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. Developers build and run applications without having to manage the underlying infrastructure."
  },
  {
    id: 30,
    questionNumber: 93,
    topic: "Container Runtime Interface",
    question: "What is the purpose of the CRI?",
    options: [
      "To provide runtime integration control when multiple runtimes are used.",
      "Support container replication and scaling on nodes.",
      "Provide an interface allowing Kubernetes to support pluggable container runtimes.",
      "Allow the definition of dynamic resource criteria across containers."
    ],
    correct: 2,
    explanation: "The Container Runtime Interface (CRI) is a standard API that allows Kubernetes to interact with different container runtimes in a consistent manner. The purpose of the CRI is to provide an abstraction layer that enables Kubernetes to support pluggable container runtimes."
  },
  {
    id: 31,
    questionNumber: 95,
    topic: "CNCF",
    question: "In CNCF, who develops specifications for industry standards around container formats and runtimes?",
    options: [
      "Open Container Initiative (OCI)",
      "Linux Foundation Certification Group (LFCG)",
      "Container Network Interface (CNI)",
      "Container Runtime Interface (CRI)"
    ],
    correct: 0,
    explanation: "Within the Cloud Native Computing Foundation (CNCF), the Open Container Initiative (OCI) is responsible for developing specifications for industry standards around container image formats and runtimes."
  },
  {
    id: 32,
    questionNumber: 96,
    topic: "Kubernetes API Versions",
    question: "Which of the following options includes valid API versions?",
    options: [
      "alpha1v1, beta3v3, v2",
      "alpha1, beta3, v2",
      "v1alpha1, v2beta3, v2",
      "v1alpha1, v2beta3, 2.0"
    ],
    correct: 2,
    explanation: "Kubernetes follows a specific convention for API versioning, which includes versions like v1alpha1, v2beta3, and stable versions like v1, v2. The format typically consists of a version (vX), followed by an optional alpha or beta designation."
  },
  {
    id: 33,
    questionNumber: 97,
    topic: "Kubectl Commands",
    question: "Which of the following will view the snapshot of previously terminated ruby container logs from Pod web-1?",
    options: [
      "kubectl logs -p -c ruby web-1",
      "kubectl logs -c ruby web-1",
      "kubectl logs -p ruby web-1",
      "kubectl logs -p -c web-1 ruby"
    ],
    correct: 0,
    explanation: "To view the logs of a previously terminated container within a Pod in Kubernetes, you use the kubectl logs command with the -p flag (for previous) and -c flag (to specify the container name). The correct format is kubectl logs -p -c ruby web-1."
  },
  {
    id: 34,
    questionNumber: 99,
    topic: "Kubernetes High Availability",
    question: "How many hosts are required to set up a highly available Kubernetes cluster when using an external etcd topology?",
    options: [
      "Four hosts. Two for control plane nodes and two for etcd nodes.",
      "Four hosts. One for a control plane node and three for etcd nodes.",
      "Three hosts. The control plane nodes and etcd nodes share the same host.",
      "Six hosts. Three for control plane nodes and three for etcd nodes."
    ],
    correct: 3,
    explanation: "For a highly available Kubernetes cluster with an external etcd topology, it's recommended to run a minimum of six hosts: three control plane nodes and three etcd nodes."
  },
  {
    id: 35,
    questionNumber: 102,
    topic: "Kubernetes Storage",
    question: "Which resource do you use to attach a volume in a Pod?",
    options: [
      "StorageVolume",
      "PersistentVolume",
      "StorageClass",
      "PersistentVolumeClaim"
    ],
    correct: 3,
    explanation: "In Kubernetes, a PersistentVolumeClaim (PVC) is the resource that a Pod uses to request and attach a volume. A PVC is a request for storage by a user."
  },
  {
    id: 36,
    questionNumber: 104,
    topic: "Linux Namespaces",
    question: "What Linux namespace is shared by default by containers running within a Kubernetes Pod?",
    options: [
      "Host Network",
      "Network",
      "Process ID",
      "Process Name"
    ],
    correct: 1,
    explanation: "By default, containers running within the same Kubernetes Pod share the Network namespace. This means that all containers in a Pod share the same IP address and port space."
  },
  {
    id: 37,
    questionNumber: 105,
    topic: "Docker",
    question: "What is a Dockerfile?",
    options: [
      "A bash script that is used to automatically build a docker image.",
      "A config file that defines which image registry a container should be pushed to.",
      "A text file that contains all the commands a user could call on the command line to assemble an image.",
      "An image layer created by a running container stored on the host."
    ],
    correct: 2,
    explanation: "A Dockerfile is a text file that contains a set of instructions (commands) that Docker reads to automatically build a Docker image. These instructions specify the base image, add application code, install dependencies, configure settings, and define the commands to be run when the container starts."
  },
  {
    id: 38,
    questionNumber: 106,
    topic: "Kubernetes Scheduling",
    question: "What does the \"nodeSelector\" within a PodSpec use to place Pods on the target nodes?",
    options: [
      "Annotations",
      "IP Addresses",
      "Hostnames",
      "Labels"
    ],
    correct: 3,
    explanation: "The nodeSelector field within a PodSpec is used to place Pods on target nodes based on the labels assigned to those nodes. Labels are key-value pairs that can be attached to Kubernetes objects, including nodes."
  },
  {
    id: 39,
    questionNumber: 107,
    topic: "Kubernetes Workloads",
    question: "What do Deployments and StatefulSets have in common?",
    options: [
      "They manage Pods that are based on an identical container spec.",
      "They support the OnDelete update strategy.",
      "They support an ordered, graceful deployment and scaling.",
      "They maintain a sticky identity for each of their Pods."
    ],
    correct: 0,
    explanation: "Both Deployments and StatefulSets in Kubernetes manage Pods that are based on an identical container specification (PodTemplateSpec). This means that the Pods managed by either a Deployment or a StatefulSet are created from the same template."
  },
  {
    id: 40,
    questionNumber: 110,
    topic: "Kubernetes Autoscaling",
    question: "Which tools enable Kubernetes HorizontalPodAutoscalers to use custom, application-generated metrics to trigger scaling events?",
    options: [
      "Prometheus and the prometheus-adapter.",
      "Graylog and graylog-autoscaler metrics.",
      "Graylog and the kubernetes-adapter.",
      "Grafana and Prometheus."
    ],
    correct: 0,
    explanation: "Prometheus is widely used for monitoring and collecting metrics in Kubernetes environments. To enable Kubernetes HorizontalPodAutoscalers (HPAs) to use custom, application-generated metrics, the prometheus-adapter is used."
  },
  {
    id: 41,
    questionNumber: 112,
    topic: "Scaling",
    question: "Which of the following best describes horizontally scaling an application deployment?",
    options: [
      "The act of adding/removing node instances to the cluster to meet demand.",
      "The act of adding/removing applications to meet demand.",
      "The act of adding/removing application instances of the same application to meet demand.",
      "The act of adding/removing resources to application instances to meet demand."
    ],
    correct: 2,
    explanation: "Horizontally scaling an application deployment involves adding or removing instances (replicas) of the same application to meet demand. This is in contrast to vertical scaling, which involves adding or removing resources to a single instance."
  },
  {
    id: 42,
    questionNumber: 113,
    topic: "Kubernetes Services",
    question: "How many different Kubernetes service types can you define?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correct: 2,
    explanation: "Kubernetes supports four different core Service types: ClusterIP, NodePort, LoadBalancer, and ExternalName."
  },
  {
    id: 43,
    questionNumber: 114,
    topic: "Kubernetes Fundamentals",
    question: "What is the difference between a Deployment and a ReplicaSet?",
    options: [
      "With a Deployment, you can't control the number of pod replicas.",
      "A ReplicaSet does not guarantee a stable set of replica pods running.",
      "A Deployment is basically the same as a ReplicaSet with annotations.",
      "A Deployment is a higher-level concept that manages ReplicaSets."
    ],
    correct: 3,
    explanation: "A Deployment is a higher-level abstraction that manages ReplicaSets and provides declarative updates to applications (e.g., rolling updates, rollbacks). A ReplicaSet is a lower-level controller that ensures a specified number of identical Pod replicas are running."
  },
  {
    id: 44,
    questionNumber: 115,
    topic: "Container Runtime Interface",
    question: "The Container Runtime Interface (CRI) defines the protocol for the communication between:",
    options: [
      "The kubelet and the container runtime.",
      "The container runtime and etcd.",
      "The kube-apiserver and the kubelet.",
      "The container runtime and the image registry."
    ],
    correct: 0,
    explanation: "The Container Runtime Interface (CRI) defines the protocol for communication between the kubelet and the container runtime (e.g., containerd, CRI-O). The CRI allows Kubernetes to support different container runtimes in a consistent manner."
  },
  {
    id: 45,
    questionNumber: 116,
    topic: "Authorization",
    question: "Which authorization-mode allows granular control over the operations that different entities can perform on different objects in a Kubernetes cluster?",
    options: [
      "Webhook Mode Authorization Control",
      "Role Based Access Control",
      "Node Authorization Access Control",
      "Attribute Based Access Control"
    ],
    correct: 1,
    explanation: "Role-Based Access Control (RBAC) is an authorization mode in Kubernetes that provides fine-grained control over the actions that users, groups, and service accounts can perform on various resources within the cluster."
  },
  {
    id: 46,
    questionNumber: 117,
    topic: "Helm",
    question: "Which of the following is a correct definition of a Helm chart?",
    options: [
      "A Helm chart is a collection of YAML files bundled in a tar.gz file and can be applied without decompressing it.",
      "A Helm chart is a collection of JSON files and contains all the resource definitions to run an application on Kubernetes.",
      "A Helm chart is a collection of YAML files that can be applied on Kubernetes by using the kubectl tool.",
      "A Helm chart is similar to a package and contains all the resource definitions to run an application on Kubernetes."
    ],
    correct: 3,
    explanation: "A Helm chart is a package format used by Helm, a package manager for Kubernetes. Helm charts contain all the necessary resource definitions to deploy and manage an application on a Kubernetes cluster."
  },
  {
    id: 47,
    questionNumber: 118,
    topic: "Kubernetes Namespaces",
    question: "Which of the following sentences is true about namespaces in Kubernetes?",
    options: [
      "You can create a namespace within another namespace in Kubernetes.",
      "You can create two resources of the same kind and name in a namespace.",
      "The default namespace exists when a new cluster is created.",
      "All the objects in the cluster are namespaced by default."
    ],
    correct: 2,
    explanation: "When a new Kubernetes cluster is created, the default namespace (along with kube-system, kube-public, and kube-node-lease) automatically exists."
  },
  {
    id: 48,
    questionNumber: 119,
    topic: "Kubernetes Autoscaling",
    question: "How does Horizontal Pod autoscaling work in Kubernetes?",
    options: [
      "The Horizontal Pod Autoscaler controller adds more CPU or memory to the pods when the load is above the configured threshold, and reduces CPU or memory when the load is below.",
      "The Horizontal Pod Autoscaler controller adds more pods when the load is above the configured threshold, but does not reduce the number of pods when the load is below.",
      "The Horizontal Pod Autoscaler controller adds more pods to the specified DaemonSet when the load is above the configured threshold, and reduces the number of pods when the load is below.",
      "The Horizontal Pod Autoscaler controller adds more pods when the load is above the configured threshold, and reduces the number of pods when the load is below."
    ],
    correct: 3,
    explanation: "The Horizontal Pod Autoscaler (HPA) in Kubernetes automatically adjusts the number of Pod replicas based on observed metrics. The HPA scales up (adding more Pods) when the load is high and scales down (reducing the number of Pods) when the load is low."
  },
  {
    id: 49,
    questionNumber: 120,
    topic: "Kubernetes Fundamentals",
    question: "What is a Pod?",
    options: [
      "A networked application within Kubernetes.",
      "A storage volume within Kubernetes.",
      "A single container within Kubernetes.",
      "A group of one or more containers within Kubernetes."
    ],
    correct: 3,
    explanation: "In Kubernetes, a Pod is the smallest deployable unit of computing. A Pod represents a single instance of a running process in your cluster and can contain a group of one or more tightly coupled containers that share resources."
  },
  {
    id: 50,
    questionNumber: 122,
    topic: "Kubernetes Jobs",
    question: "What is the Kubernetes object used for running a recurring workload?",
    options: [
      "Job",
      "Batch",
      "DaemonSet",
      "CronJob"
    ],
    correct: 3,
    explanation: "A CronJob is the Kubernetes object used for running recurring workloads. It allows you to schedule a Job to run at specified intervals using cron expressions, similar to the cron utility in Unix-like operating systems."
  },
  {
    id: 51,
    questionNumber: 123,
    topic: "DevOps",
    question: "In the DevOps framework and culture, who builds, automates, and offers continuous delivery tools for developer teams?",
    options: [
      "Application Users",
      "Application Developers",
      "Platform Engineers",
      "Cluster Operators"
    ],
    correct: 2,
    explanation: "In the DevOps framework and culture, Platform Engineers are typically responsible for building, automating, and offering continuous delivery tools and infrastructure for developer teams."
  }
];

export default examSet2Questions;