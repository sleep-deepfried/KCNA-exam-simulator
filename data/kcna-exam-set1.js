// KCNA Exam Set 1 - All 51 Questions
// Extracted from kcna-exam-set1.md

export const examSet1Questions = [
  {
    id: 1,
    questionNumber: 51,
    topic: "Kubernetes Fundamentals",
    question: "How are ReplicaSets and Deployments related?",
    options: [
      "Deployments manage ReplicaSets and provide declarative updates to Pods.",
      "ReplicaSets manage stateful applications, Deployments manage stateless applications.",
      "Deployments are runtime instances of ReplicaSets.",
      "ReplicaSets are subsets of Jobs and CronJobs which use imperative Deployments."
    ],
    correct: 0,
    explanation: "Deployments are higher-level abstractions in Kubernetes that manage ReplicaSets. ReplicaSets, in turn, are lower-level controllers responsible for maintaining a specified number of identical Pods to ensure high availability and fault tolerance."
  },
  {
    id: 2,
    questionNumber: 52,
    topic: "Kubernetes Scheduling",
    question: "What factors influence the Kubernetes scheduler when it places Pods on nodes?",
    options: [
      "Pod memory requests, node taints, and Pod affinity.",
      "Pod labels, node labels, and request labels.",
      "Node taints, node level, and Pod priority.",
      "Pod priority, container command, and node labels."
    ],
    correct: 0,
    explanation: "The Kubernetes scheduler considers resource requests (CPU and memory), node taints, and Pod affinity/anti-affinity rules when placing Pods on nodes."
  },
  {
    id: 3,
    questionNumber: 54,
    topic: "Kubernetes Fundamentals",
    question: "What is the primary mechanism to identify grouped objects in a Kubernetes cluster?",
    options: [
      "Custom Resources",
      "Labels",
      "Label Selector",
      "Pod"
    ],
    correct: 1,
    explanation: "Labels are the primary mechanism used to identify and group objects in a Kubernetes cluster. Labels are key-value pairs that can be attached to Kubernetes objects such as Pods, Services, and Deployments."
  },
  {
    id: 4,
    questionNumber: 55,
    topic: "Kubernetes Services",
    question: "What is the name of the Kubernetes resource used to expose an application?",
    options: [
      "Port",
      "Service",
      "DNS",
      "Deployment"
    ],
    correct: 1,
    explanation: "A Service is the Kubernetes resource used to expose an application running on a set of Pods. It provides a stable endpoint, load balancing, and service discovery."
  },
  {
    id: 5,
    questionNumber: 58,
    topic: "Container Runtime",
    question: "In the Kubernetes platform, which component is responsible for running containers?",
    options: [
      "etcd",
      "CRI-O",
      "cloud-controller-manager",
      "kube-controller-manager"
    ],
    correct: 1,
    explanation: "CRI-O is a lightweight container runtime specifically designed for Kubernetes. It implements the Kubernetes Container Runtime Interface (CRI) to enable the use of containers within Kubernetes clusters."
  },
  {
    id: 6,
    questionNumber: 1,
    topic: "OCI and Containers",
    question: "What native runtime is Open Container Initiative (OCI) compliant?",
    options: [
      "runC",
      "runV",
      "kata-containers",
      "gvisor"
    ],
    correct: 0,
    explanation: "runC is the reference implementation of the Open Container Initiative (OCI) runtime specification. This means it is a native OCI-compliant runtime."
  },
  {
    id: 7,
    questionNumber: 2,
    topic: "Kubernetes Fundamentals",
    question: "Which API object is the recommended way to run a scalable, stateless application on your cluster?",
    options: [
      "ReplicaSet",
      "Deployment",
      "DaemonSet",
      "Pod"
    ],
    correct: 1,
    explanation: "Deployment is the recommended API object for running scalable, stateless applications. A Deployment manages ReplicaSets, which in turn ensure that a specified number of Pod replicas are running at all times."
  },
  {
    id: 8,
    questionNumber: 3,
    topic: "Kubernetes Jobs",
    question: "A CronJob is scheduled to run by a user every one hour. What happens in the cluster when it's time for this CronJob to run?",
    options: [
      "Kubelet watches API Server for CronJob objects. When it's time for a Job to run, it runs the Pod directly.",
      "Kube-scheduler watches API Server for CronJob objects, and this is why it's called kube-scheduler.",
      "CronJob controller component creates a Pod and waits until it finishes to run.",
      "CronJob controller component creates a Job. Then the Job controller creates a Pod and waits until it finishes to run."
    ],
    correct: 3,
    explanation: "When it's time for a CronJob to run, the CronJob controller component creates a Job object. The Job controller then takes this Job and creates one or more Pods to run the specified task."
  },
  {
    id: 9,
    questionNumber: 4,
    topic: "Kubernetes Architecture",
    question: "What is the purpose of the kubelet component within a Kubernetes cluster?",
    options: [
      "A dashboard for Kubernetes Clusters that allows management and troubleshooting of applications.",
      "A network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.",
      "A component that watches for newly created Pods with no assigned node, and selects a node for them to run on.",
      "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod."
    ],
    correct: 3,
    explanation: "The kubelet is an agent that runs on each node in a Kubernetes cluster. Its primary purpose is to ensure that the containers defined in PodSpecs are running and healthy."
  },
  {
    id: 10,
    questionNumber: 5,
    topic: "Security",
    question: "What is the default value for authorization-mode in Kubernetes API server?",
    options: [
      "--authorization-mode=RBAC",
      "--authorization-mode=AlwaysAllow",
      "--authorization-mode=AlwaysDeny",
      "--authorization-mode=ABAC"
    ],
    correct: 1,
    explanation: "By default, the Kubernetes API server uses --authorization-mode=AlwaysAllow. This means that, by default, all requests to the API server are allowed. However, for production environments, it is strongly recommended to use more restrictive authorization modes like RBAC."
  },
  {
    id: 11,
    questionNumber: 7,
    topic: "Kubernetes Services",
    question: "What is a Kubernetes service with no cluster IP address called?",
    options: [
      "Headless Service",
      "Nodeless Service",
      "IPLess Service",
      "Specless Service"
    ],
    correct: 0,
    explanation: "A Kubernetes Service with no cluster IP address is called a Headless Service. This type of service directly maps to the Pods it manages, allowing clients to communicate with individual Pods using their unique IP addresses."
  },
  {
    id: 12,
    questionNumber: 8,
    topic: "CI/CD",
    question: "CI/CD stands for:",
    options: [
      "Continuous Information / Continuous Development",
      "Continuous Integration / Continuous Development",
      "Cloud Integration / Cloud Development",
      "Continuous Integration / Continuous Deployment"
    ],
    correct: 3,
    explanation: "CI/CD stands for Continuous Integration / Continuous Deployment (or Continuous Delivery). Continuous Integration is where developers frequently merge code changes into a central repository where automated builds and tests are run."
  },
  {
    id: 13,
    questionNumber: 9,
    topic: "Security",
    question: "What default level of protection is applied to the data in Secrets in the Kubernetes API?",
    options: [
      "The values use AES Symmetric Encryption",
      "The values are stored in plain text",
      "The values are encoded with SHA256 hashes",
      "The values are base64 encoded"
    ],
    correct: 3,
    explanation: "By default, Kubernetes Secrets store sensitive information as base64-encoded strings. It's crucial to understand that base64 encoding is not encryption; it is merely an encoding scheme that provides a basic level of obfuscation."
  },
  {
    id: 14,
    questionNumber: 10,
    topic: "Kubernetes Networking",
    question: "What function does kube-proxy provide to a cluster?",
    options: [
      "Implementing the Ingress resource type for application traffic.",
      "Forwarding data to the correct endpoints for Services.",
      "Managing data egress from the cluster nodes to the network.",
      "Managing access to the Kubernetes API."
    ],
    correct: 1,
    explanation: "The kube-proxy is a network proxy that runs on each node in the Kubernetes cluster. Its primary function is to maintain network rules on nodes, which enable network communication to your Pods from network sessions inside or outside the cluster."
  },
  {
    id: 15,
    questionNumber: 11,
    topic: "Kubernetes API",
    question: "How long should a stable API element in Kubernetes be supported (at minimum) after deprecation?",
    options: [
      "9 months",
      "24 months",
      "12 months",
      "6 months"
    ],
    correct: 2,
    explanation: "According to Kubernetes API deprecation policy, deprecated behaviors in a stable API must function for no less than 1 year after their announced deprecation. This policy provides users with sufficient time to migrate to newer versions of the API."
  },
  {
    id: 16,
    questionNumber: 12,
    topic: "Kubernetes Distributions",
    question: "What is the name of the lightweight Kubernetes distribution built for IoT and edge computing?",
    options: [
      "OpenShift",
      "k3s",
      "RKE",
      "k1s"
    ],
    correct: 1,
    explanation: "k3s is a highly lightweight, fully compliant Kubernetes distribution that is optimized for resource-constrained environments, making it ideal for IoT and edge computing use cases."
  },
  {
    id: 17,
    questionNumber: 13,
    topic: "Kubernetes Autoscaling",
    question: "Kubernetes ____ allows you to automatically manage the number of nodes in your cluster to meet demand.",
    options: [
      "Node Autoscaler",
      "Cluster Autoscaler",
      "Horizontal Pod Autoscaler",
      "Vertical Pod Autoscaler"
    ],
    correct: 1,
    explanation: "The Kubernetes Cluster Autoscaler automatically manages the number of nodes in your Kubernetes cluster. It increases the number of nodes when there are insufficient resources to run pending Pods and decreases the number of nodes when they are underutilized."
  },
  {
    id: 18,
    questionNumber: 14,
    topic: "Security",
    question: "Which of the following statements is correct concerning Open Policy Agent (OPA)?",
    options: [
      "The policies must be written in Python language.",
      "Kubernetes can use it to validate requests and apply policies.",
      "Policies can only be tested when published.",
      "It cannot be used outside Kubernetes."
    ],
    correct: 1,
    explanation: "Open Policy Agent (OPA) is a general-purpose policy engine that can be used to enforce policies across various systems, including Kubernetes. In Kubernetes, OPA can be integrated to validate admission requests and apply policies for security, compliance, and other requirements."
  },
  {
    id: 19,
    questionNumber: 15,
    topic: "Cloud Native",
    question: "In a cloud native world, what does the IaC abbreviation stand for?",
    options: [
      "Infrastructure and Code",
      "Infrastructure as Code",
      "Infrastructure above Code",
      "Infrastructure across Code"
    ],
    correct: 1,
    explanation: "IaC stands for Infrastructure as Code. It is a practice of managing and provisioning computing infrastructure using machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."
  },
  {
    id: 20,
    questionNumber: 16,
    topic: "Serverless",
    question: "In which framework do the developers no longer have to deal with capacity, deployments, scaling and fault tolerance, and OS?",
    options: [
      "Docker Swarm",
      "Kubernetes",
      "Mesos",
      "Serverless"
    ],
    correct: 3,
    explanation: "In the Serverless framework, developers are abstracted away from managing underlying infrastructure such as servers, operating systems, and capacity. The cloud provider automatically handles the provisioning, scaling, and maintenance of the infrastructure."
  },
  {
    id: 21,
    questionNumber: 17,
    topic: "Container Orchestration",
    question: "Which of the following characteristics is associated with container orchestration?",
    options: [
      "Application message distribution",
      "Dynamic scheduling",
      "Deploying application JAR files",
      "Virtual Machine distribution"
    ],
    correct: 1,
    explanation: "Container orchestration involves the automated management of containerized applications, including their deployment, scaling, networking, and lifecycle management. One of its key characteristics is dynamic scheduling, which refers to the ability to automatically place containers on the most appropriate nodes in a cluster."
  },
  {
    id: 22,
    questionNumber: 18,
    topic: "Kubernetes Workloads",
    question: "Which of the following workload require a headless service while deploying into the namespace?",
    options: [
      "StatefulSet",
      "CronJob",
      "Deployment",
      "DaemonSet"
    ],
    correct: 0,
    explanation: "StatefulSets typically require a Headless Service. StatefulSets are used for stateful applications (like databases) that require stable network identifiers and ordered, graceful deployment and scaling."
  },
  {
    id: 23,
    questionNumber: 19,
    topic: "Package Management",
    question: "What is Helm?",
    options: [
      "An open source dashboard for Kubernetes.",
      "A package manager for Kubernetes applications.",
      "A custom scheduler for Kubernetes.",
      "An end to end testing project for Kubernetes applications."
    ],
    correct: 1,
    explanation: "Helm is a package manager for Kubernetes applications. It helps you define, install, and manage Kubernetes applications using a packaging format called 'charts.'"
  },
  {
    id: 24,
    questionNumber: 20,
    topic: "Kubectl Commands",
    question: "Which is the correct kubectl command to display logs in real time?",
    options: [
      "kubectl logs -p test-container-1",
      "kubectl logs -c test-container-1",
      "kubectl logs -l test-container-1",
      "kubectl logs -f test-container-1"
    ],
    correct: 3,
    explanation: "The kubectl logs -f command (where -f stands for --follow) is used to stream logs from a container in real-time as new log entries are added."
  },
  {
    id: 25,
    questionNumber: 22,
    topic: "GitOps",
    question: "What is the core functionality of GitOps tools like Argo CD and Flux?",
    options: [
      "They track production changes made by a human in a Git repository and generate a human-readable audit trail.",
      "They replace human operations with an agent that tracks Git commands.",
      "They automatically create pull requests when dependencies are outdated.",
      "They continuously compare the desired state in Git with the actual production state and notify or act upon differences."
    ],
    correct: 3,
    explanation: "The core functionality of GitOps tools like Argo CD and Flux is to enable continuous delivery and deployment of applications to Kubernetes clusters using Git as the single source of truth."
  },
  {
    id: 26,
    questionNumber: 23,
    topic: "Kubernetes Workloads",
    question: "Which Kubernetes resource workload ensures that all (or some) nodes run a copy of a Pod?",
    options: [
      "ReplicaSet",
      "StatefulSet",
      "DaemonSet",
      "Deployment"
    ],
    correct: 2,
    explanation: "A DaemonSet ensures that a copy of a Pod runs on all (or some specified) nodes in the Kubernetes cluster. It is typically used for deploying system-level daemons or cluster services that must run on every node."
  },
  {
    id: 27,
    questionNumber: 24,
    topic: "Kubernetes Extensions",
    question: "We can extend the Kubernetes API with Kubernetes API Aggregation Layer and CRDs. What is CRD?",
    options: [
      "Custom Resource Definition",
      "Custom Restricted Definition",
      "Customized RUST Definition",
      "Custom RUST Definition"
    ],
    correct: 0,
    explanation: "CRD stands for Custom Resource Definition. It is a Kubernetes extension mechanism that allows users to define their own custom resources and their schema."
  },
  {
    id: 28,
    questionNumber: 25,
    topic: "Kubernetes Project",
    question: "The Kubernetes project work is carried primarily by SIGs. What does SIG stand for?",
    options: [
      "Special Interest Group",
      "Software Installation Guide",
      "Support and Information Group",
      "Strategy Implementation Group"
    ],
    correct: 0,
    explanation: "In the context of the Kubernetes project, SIG stands for Special Interest Group. SIGs are groups of contributors focused on specific areas or domains within the project."
  },
  {
    id: 29,
    questionNumber: 26,
    topic: "Security",
    question: "What is the order of 4C's in Cloud Native Security, starting with the layer that a user has the most control over?",
    options: [
      "Cloud -> Container -> Cluster -> Code",
      "Container -> Cluster -> Code -> Cloud",
      "Cluster -> Container -> Code -> Cloud",
      "Code -> Container -> Cluster -> Cloud"
    ],
    correct: 3,
    explanation: "The 4 Cs of Cloud Native Security, ordered from most to least user control, are: Code (most control), Container, Cluster, Cloud (least control)."
  },
  {
    id: 30,
    questionNumber: 28,
    topic: "Service Mesh",
    question: "What is the common standard for Service Meshes?",
    options: [
      "Service Mesh Specification (SMS)",
      "Service Mesh Technology (SMT)",
      "Service Mesh Interface (SMI)",
      "Service Mesh Function (SMF)"
    ],
    correct: 2,
    explanation: "The common standard for Service Meshes is the Service Mesh Interface (SMI). SMI is a specification for implementing service mesh functionality across different service mesh implementations."
  },
  {
    id: 31,
    questionNumber: 29,
    topic: "Kubernetes Networking",
    question: "Which statement about Ingress is correct?",
    options: [
      "Ingress provides a simple way to track network endpoints within a cluster.",
      "Ingress is a Service type like NodePort and ClusterIP.",
      "Ingress is a construct that allows you to specify how a Pod is allowed to communicate.",
      "Ingress exposes routes from outside the cluster to services in the cluster."
    ],
    correct: 3,
    explanation: "Ingress is a Kubernetes API object that manages external access to services within a cluster, typically HTTP and HTTPS. It provides a way to define rules for routing traffic from outside the cluster to the appropriate services inside the cluster."
  },
  {
    id: 32,
    questionNumber: 30,
    topic: "Service Discovery",
    question: "What best describes cloud native service discovery?",
    options: [
      "It's a mechanism for applications and microservices to locate each other on a network.",
      "It's a procedure for discovering a MAC address, associated with a given IP address.",
      "It's used for automatically assigning IP addresses to devices connected to the network.",
      "It's a protocol that turns human-readable domain names into IP addresses on the Internet."
    ],
    correct: 0,
    explanation: "Cloud native service discovery is a mechanism for applications and microservices to dynamically discover and communicate with each other on a network without hardcoding IP addresses or relying on static configurations."
  },
  {
    id: 33,
    questionNumber: 31,
    topic: "Service Mesh",
    question: "What components are common in a service mesh?",
    options: [
      "tracing and log storage",
      "circuit breaking and Pod scheduling",
      "data plane and runtime plane",
      "service proxy and control plane"
    ],
    correct: 3,
    explanation: "A service mesh typically consists of two main components: Service Proxy (Data Plane) and Control Plane. The service proxy handles communication between services, while the control plane manages and configures the proxies."
  },
  {
    id: 34,
    questionNumber: 32,
    topic: "Storage",
    question: "Which storage operator in Kubernetes can help the system to self-scale, self-heal, etc?",
    options: [
      "Rook",
      "Kubernetes",
      "Helm",
      "Container Storage Interface (CSI)"
    ],
    correct: 0,
    explanation: "Rook is an open-source cloud-native storage orchestrator that provides features like self-scaling, self-healing, monitoring, and automation of storage management tasks."
  },
  {
    id: 35,
    questionNumber: 33,
    topic: "Kubernetes Objects",
    question: "What fields must exist in any Kubernetes object (e.g. YAML) file?",
    options: [
      "apiVersion, kind, metadata",
      "kind, namespace, data",
      "apiVersion, metadata, namespace",
      "kind, metadata, data"
    ],
    correct: 0,
    explanation: "In any Kubernetes object definition file (YAML), three mandatory top-level fields must exist: apiVersion, kind, and metadata."
  },
  {
    id: 36,
    questionNumber: 34,
    topic: "SRE",
    question: "Which of the following would fall under the responsibilities of an SRE?",
    options: [
      "Developing a new application feature.",
      "Creating a monitoring baseline for an application.",
      "Submitting a budget for running an application in a cloud.",
      "Writing policy on how to submit a code change."
    ],
    correct: 1,
    explanation: "Site Reliability Engineering (SRE) focuses on the reliability, availability, performance, and efficiency of systems. Creating a monitoring baseline for an application is a core SRE responsibility."
  },
  {
    id: 37,
    questionNumber: 35,
    topic: "Kubernetes Namespaces",
    question: "What are the initial namespaces that Kubernetes starts with?",
    options: [
      "default, kube-system, kube-public, kube-node-lease",
      "default, system, kube-public",
      "kube-default, kube-system, kube-main, kube-node-lease",
      "kube-default, system, kube-main, kube-primary"
    ],
    correct: 0,
    explanation: "Kubernetes clusters typically start with four initial namespaces: default, kube-system, kube-public, and kube-node-lease."
  },
  {
    id: 38,
    questionNumber: 36,
    topic: "Kubernetes Probes",
    question: "What is a probe within Kubernetes?",
    options: [
      "A monitoring mechanism of the Kubernetes API.",
      "A pre-operational scope issued by the kubectl agent.",
      "A diagnostic performed periodically by the kubelet on a container.",
      "A logging mechanism of the Kubernetes API."
    ],
    correct: 2,
    explanation: "In Kubernetes, a 'probe' refers to a diagnostic mechanism performed periodically by the kubelet on a container to check its health and readiness."
  },
  {
    id: 39,
    questionNumber: 38,
    topic: "CNI and Network Policies",
    question: "What feature must a CNI support to control specific traffic flows for workloads running in Kubernetes?",
    options: [
      "Border Gateway Protocol",
      "IP Address Management",
      "Pod Security Policy",
      "Network Policies"
    ],
    correct: 3,
    explanation: "For a Container Network Interface (CNI) plugin to control specific traffic flows for workloads in Kubernetes, it must support Network Policies."
  },
  {
    id: 40,
    questionNumber: 39,
    topic: "Kubernetes DNS",
    question: "What is the main role of the Kubernetes DNS within a cluster?",
    options: [
      "Acts as a DNS server for virtual machines that are running outside the cluster.",
      "Provides a DNS as a Service, allowing users to create zones and registries for domains that they own.",
      "Allows Pods running in dual stack to convert IPv6 calls into IPv4 calls.",
      "Provides consistent DNS Names for Pods and Services for workloads that need to communicate with each other."
    ],
    correct: 3,
    explanation: "The main role of Kubernetes DNS within a cluster is to provide consistent DNS names for Pods and Services. This service discovery mechanism enables reliable communication between workloads."
  },
  {
    id: 41,
    questionNumber: 40,
    topic: "Cloud Controller Manager",
    question: "Scenario: You have a Kubernetes cluster hosted in a public cloud provider. When trying to create a Service of type LoadBalancer, the external-ip is stuck in the 'Pending' state. Which Kubernetes component is failing in this scenario?",
    options: [
      "Cloud Controller Manager",
      "Load Balancer Manager",
      "Cloud Architecture Manager",
      "Cloud Load Balancer Manager"
    ],
    correct: 0,
    explanation: "The Cloud Controller Manager is responsible for managing cloud-specific resources and integrations, including load balancers provided by the cloud provider."
  },
  {
    id: 42,
    questionNumber: 41,
    topic: "Cloud Native Applications",
    question: "What are the characteristics for building every cloud-native application?",
    options: [
      "Resiliency, Operability, Observability, Availability",
      "Resiliency, Containerd, Observability, Agility",
      "Kubernetes, Operability, Observability, Availability",
      "Resiliency, Agility, Operability, Observability"
    ],
    correct: 3,
    explanation: "Key characteristics for building cloud-native applications include: Resiliency, Agility, Operability, and Observability."
  },
  {
    id: 43,
    questionNumber: 42,
    topic: "CNCF",
    question: "What does CNCF stand for?",
    options: [
      "Cloud Native Community Foundation",
      "Cloud Native Computing Foundation",
      "Cloud Neutral Computing Foundation",
      "Cloud Neutral Community Foundation"
    ],
    correct: 1,
    explanation: "CNCF stands for the Cloud Native Computing Foundation. It is an open-source software foundation that hosts critical components of the cloud native software stack."
  },
  {
    id: 44,
    questionNumber: 43,
    topic: "Kubernetes Namespaces",
    question: "Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called:",
    options: [
      "namespaces",
      "containers",
      "hypervisors",
      "cgroups"
    ],
    correct: 0,
    explanation: "Namespaces in Kubernetes are virtual clusters that provide resource isolation, access control, and organization within a single physical cluster."
  },
  {
    id: 45,
    questionNumber: 44,
    topic: "Kubernetes API",
    question: "What component enables end users, different parts of the Kubernetes cluster, and external components to communicate with one another?",
    options: [
      "kubectl",
      "AWS Management Console",
      "Kubernetes API",
      "Google Cloud SDK"
    ],
    correct: 2,
    explanation: "The Kubernetes API (Application Programming Interface) is the central component that enables communication between end users, different parts of the Kubernetes cluster, and external components."
  },
  {
    id: 46,
    questionNumber: 45,
    topic: "Kubectl Commands",
    question: "Which command will list the resource types that exist within a cluster?",
    options: [
      "kubectl api-resources",
      "kubectl get namespaces",
      "kubectl api-versions",
      "curl https://kubectrl/namespaces"
    ],
    correct: 0,
    explanation: "The kubectl api-resources command displays a list of all resource types that are available in the Kubernetes API."
  },
  {
    id: 47,
    questionNumber: 46,
    topic: "Kubernetes Control Plane",
    question: "Which of these components is part of the Kubernetes Control Plane?",
    options: [
      "coredns",
      "cloud-controller-manager",
      "kube-proxy",
      "kubelet"
    ],
    correct: 1,
    explanation: "The cloud-controller-manager is part of the Kubernetes Control Plane. It integrates with the underlying cloud provider's API to manage cloud-specific resources like load balancers, nodes, and storage."
  },
  {
    id: 48,
    questionNumber: 47,
    topic: "Container Runtime Interface",
    question: "Which of the following systems is NOT compatible with the CRI runtime interface standard?",
    options: [
      "CRI-0",
      "dockershim",
      "systemd",
      "containerd"
    ],
    correct: 2,
    explanation: "systemd is an initialization system and service manager for Linux operating systems. It is not a container runtime and does not implement the CRI standard."
  },
  {
    id: 49,
    questionNumber: 48,
    topic: "Container Networking",
    question: "What is a key feature of a container network?",
    options: [
      "Proxying REST requests across a set of containers.",
      "Allowing containers running on separate hosts to communicate.",
      "Allowing containers on the same host to communicate.",
      "Caching remote disk access."
    ],
    correct: 1,
    explanation: "A key feature of a container network in Kubernetes is to enable network communication between containers, even when they are running on separate physical hosts (nodes) in the cluster."
  },
  {
    id: 50,
    questionNumber: 49,
    topic: "Kubernetes Rollouts",
    question: "How can you monitor the progress for an updated Deployment/DaemonSets/StatefulSets?",
    options: [
      "kubectl rollout watch",
      "kubectl rollout progress",
      "kubectl rollout state",
      "kubectl rollout status"
    ],
    correct: 3,
    explanation: "The kubectl rollout status command is used to monitor the progress of a rollout for Kubernetes resources such as Deployments, DaemonSets, or StatefulSets."
  },
  {
    id: 51,
    questionNumber: 50,
    topic: "Load Balancing",
    question: "What is the goal of load balancing?",
    options: [
      "Automatically measure request performance across instances of an application.",
      "Automatically distribute requests across different versions of an application.",
      "Automatically distribute instances of an application across the cluster.",
      "Automatically distribute requests across instances of an application."
    ],
    correct: 3,
    explanation: "The primary goal of load balancing is to automatically distribute incoming network traffic (requests) across multiple healthy instances of an application."
  }
];

export default examSet1Questions
